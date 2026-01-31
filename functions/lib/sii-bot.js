"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIIBot = void 0;
const playwright_1 = require("playwright");
class SIIBot {
    constructor(config = { headless: true }) {
        this.browser = null;
        this.context = null;
        this.page = null;
        this.logs = [];
        this.config = config;
    }
    log(step, status, message) {
        const logEntry = { step, status, message, timestamp: new Date() };
        this.logs.push(logEntry);
        console.log(`[${status.toUpperCase()}] Step ${step}: ${message}`);
    }
    async initialize() {
        this.log('init', 'success', 'Initializing browser');
        this.browser = await playwright_1.chromium.launch({
            headless: this.config.headless,
            slowMo: this.config.slowMo || 100,
        });
        this.context = await this.browser.newContext({
            viewport: { width: 1280, height: 720 },
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        });
        this.page = await this.context.newPage();
    }
    async executeBoleta(rut, password, boletaData) {
        try {
            if (!this.page) {
                throw new Error('Browser not initialized. Call initialize() first.');
            }
            await this.navigate();
            await this.authenticate(rut, password);
            await this.closeUpdateModal();
            await this.navigateToBoletas();
            await this.closeBoletasModal();
            await this.startBoletaEmission();
            await this.selectContributionType();
            await this.clickContinue();
            await this.fillBoletaForm(boletaData);
            const result = await this.captureConfirmation();
            this.log('complete', 'success', 'Boleta emission completed successfully');
            return {
                success: true,
                ...result,
                logs: this.logs,
            };
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            this.log('error', 'error', errorMessage);
            let screenshotPath;
            if (this.page) {
                screenshotPath = `/tmp/error-${Date.now()}.png`;
                await this.page.screenshot({ path: screenshotPath, fullPage: true });
            }
            return {
                success: false,
                error: errorMessage,
                screenshotPath,
                logs: this.logs,
            };
        }
    }
    async navigate() {
        this.log('navigate', 'success', 'Navigating to SII login page');
        await this.page.goto('https://zeusr.sii.cl//AUT2000/InicioAutenticacion/IngresoRutClave.html?https://misiir.sii.cl/cgi_misii/siihome.cgi');
        await this.page.waitForLoadState('networkidle');
    }
    async authenticate(rut, password) {
        this.log('auth', 'success', 'Entering credentials');
        await this.page.fill('input[name="rut"]', rut);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button:has-text("INGRESAR"), input[type="submit"][value*="INGRESAR"]');
        await this.page.waitForLoadState('networkidle');
        this.log('auth', 'success', 'Successfully logged in');
    }
    async closeUpdateModal() {
        this.log('modal', 'success', 'Looking for update modal');
        try {
            await this.page.waitForSelector('text=actualizar más tarde', { timeout: 5000 });
            await this.page.click('text=actualizar más tarde');
            this.log('modal', 'success', 'Closed update modal');
        }
        catch {
            this.log('modal', 'warning', 'Update modal not found, continuing');
        }
    }
    async navigateToBoletas() {
        this.log('navigate-boletas', 'success', 'Navigating to tramites en linea');
        await this.page.click('text=tramites en linea, a:has-text("tramites en linea")');
        await this.page.waitForTimeout(1000);
        await this.page.fill('input[placeholder*="buscar"], input[name*="buscar"]', 'boleta');
        await this.page.waitForTimeout(1000);
        await this.page.click('text=Boletas de honorarios electronicas');
        this.log('navigate-boletas', 'success', 'Selected Boletas de honorarios electronicas');
    }
    async closeBoletasModal() {
        this.log('close-modal', 'success', 'Closing boletas modal');
        try {
            await this.page.waitForSelector('text=Cerrar, button:has-text("Cerrar")', { timeout: 3000 });
            await this.page.click('text=Cerrar, button:has-text("Cerrar")');
        }
        catch {
            this.log('close-modal', 'warning', 'Cerrar button not found, continuing');
        }
    }
    async startBoletaEmission() {
        this.log('start-emission', 'success', 'Starting boleta emission');
        await this.page.click('text=Emisor de boleta de honorarios');
        await this.page.waitForTimeout(1000);
        await this.page.click('text=Emitir boleta de honorarios electrónica');
        await this.page.waitForTimeout(1000);
    }
    async selectContributionType() {
        this.log('contribution-type', 'success', 'Selecting contribution type');
        await this.page.click('text=Por contribuyente');
        await this.page.waitForTimeout(500);
        await this.page.check('input[type="radio"][value*="reteniendo"], input[type="radio"]:near(:text("reteniendo"))');
        this.log('contribution-type', 'success', 'Selected retention option');
    }
    async clickContinue() {
        this.log('continue', 'success', 'Clicking continue');
        await this.page.click('button:has-text("Continuar"), input[value="Continuar"]');
        await this.page.waitForLoadState('networkidle');
    }
    async fillBoletaForm(boletaData) {
        this.log('fill-form', 'success', 'Filling boleta form');
        await this.page.fill('input[name*="rut"], input[id*="rut"]', boletaData.receptorRut);
        await this.page.fill('textarea[name*="detalle"], textarea[name*="descripcion"], textarea', boletaData.serviceDescription);
        await this.page.fill('input[name*="monto"], input[name*="total"], input[type="number"]', boletaData.totalAmount.toString());
        await this.page.click('button[type="submit"], input[type="submit"]');
        await this.page.waitForLoadState('networkidle');
        this.log('fill-form', 'success', 'Form submitted successfully');
    }
    async captureConfirmation() {
        this.log('capture', 'success', 'Capturing confirmation data');
        const screenshotPath = `/tmp/boleta-${Date.now()}.png`;
        await this.page.screenshot({ path: screenshotPath, fullPage: true });
        let boletaNumber;
        let folio;
        try {
            const boletaText = await this.page.textContent('text=/Boleta N°|Número/');
            const folioText = await this.page.textContent('text=/Folio/');
            boletaNumber = boletaText || undefined;
            folio = folioText || undefined;
        }
        catch {
            this.log('capture', 'warning', 'Could not extract boleta number or folio');
        }
        return {
            boletaNumber,
            folio,
            screenshotPath,
        };
    }
    async close() {
        this.log('cleanup', 'success', 'Closing browser');
        if (this.browser) {
            await this.browser.close();
        }
    }
}
exports.SIIBot = SIIBot;
//# sourceMappingURL=sii-bot.js.map