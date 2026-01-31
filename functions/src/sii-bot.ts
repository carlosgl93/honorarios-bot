import { chromium, Browser, Page, BrowserContext } from 'playwright';
import { BoletaData } from './types';

export interface SIIBotConfig {
  headless: boolean;
  slowMo?: number;
}

export interface SIIBotResult {
  success: boolean;
  boletaNumber?: string;
  folio?: string;
  screenshotPath?: string;
  error?: string;
  logs: Array<{ step: string; status: string; message: string; timestamp: Date }>;
}

export class SIIBot {
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;
  private page: Page | null = null;
  private logs: SIIBotResult['logs'] = [];
  private config: SIIBotConfig;

  constructor(config: SIIBotConfig = { headless: true }) {
    this.config = config;
  }

  private log(step: string, status: 'success' | 'error' | 'warning', message: string) {
    const logEntry = { step, status, message, timestamp: new Date() };
    this.logs.push(logEntry);
    console.log(`[${status.toUpperCase()}] Step ${step}: ${message}`);
  }

  async initialize(): Promise<void> {
    this.log('init', 'success', 'Initializing browser');
    this.browser = await chromium.launch({
      headless: this.config.headless,
      slowMo: this.config.slowMo || 100,
    });
    this.context = await this.browser.newContext({
      viewport: { width: 1280, height: 720 },
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    });
    this.page = await this.context.newPage();
  }

  async executeBoleta(
    rut: string,
    password: string,
    boletaData: BoletaData
  ): Promise<SIIBotResult> {
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
    } catch (error) {
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

  private async navigate(): Promise<void> {
    this.log('navigate', 'success', 'Navigating to SII login page');
    await this.page!.goto(
      'https://zeusr.sii.cl//AUT2000/InicioAutenticacion/IngresoRutClave.html?https://misiir.sii.cl/cgi_misii/siihome.cgi'
    );
    await this.page!.waitForLoadState('networkidle');
  }

  private async authenticate(rut: string, password: string): Promise<void> {
    this.log('auth', 'success', 'Entering credentials');
    await this.page!.fill('input[name="rut"]', rut);
    await this.page!.fill('input[name="password"]', password);
    await this.page!.click('button:has-text("INGRESAR"), input[type="submit"][value*="INGRESAR"]');
    await this.page!.waitForLoadState('networkidle');
    this.log('auth', 'success', 'Successfully logged in');
  }

  private async closeUpdateModal(): Promise<void> {
    this.log('modal', 'success', 'Looking for update modal');
    try {
      await this.page!.waitForSelector('text=actualizar más tarde', { timeout: 5000 });
      await this.page!.click('text=actualizar más tarde');
      this.log('modal', 'success', 'Closed update modal');
    } catch {
      this.log('modal', 'warning', 'Update modal not found, continuing');
    }
  }

  private async navigateToBoletas(): Promise<void> {
    this.log('navigate-boletas', 'success', 'Navigating to tramites en linea');
    await this.page!.click('text=tramites en linea, a:has-text("tramites en linea")');
    await this.page!.waitForTimeout(1000);
    await this.page!.fill('input[placeholder*="buscar"], input[name*="buscar"]', 'boleta');
    await this.page!.waitForTimeout(1000);
    await this.page!.click('text=Boletas de honorarios electronicas');
    this.log('navigate-boletas', 'success', 'Selected Boletas de honorarios electronicas');
  }

  private async closeBoletasModal(): Promise<void> {
    this.log('close-modal', 'success', 'Closing boletas modal');
    try {
      await this.page!.waitForSelector('text=Cerrar, button:has-text("Cerrar")', { timeout: 3000 });
      await this.page!.click('text=Cerrar, button:has-text("Cerrar")');
    } catch {
      this.log('close-modal', 'warning', 'Cerrar button not found, continuing');
    }
  }

  private async startBoletaEmission(): Promise<void> {
    this.log('start-emission', 'success', 'Starting boleta emission');
    await this.page!.click('text=Emisor de boleta de honorarios');
    await this.page!.waitForTimeout(1000);
    await this.page!.click('text=Emitir boleta de honorarios electrónica');
    await this.page!.waitForTimeout(1000);
  }

  private async selectContributionType(): Promise<void> {
    this.log('contribution-type', 'success', 'Selecting contribution type');
    await this.page!.click('text=Por contribuyente');
    await this.page!.waitForTimeout(500);
    await this.page!.check(
      'input[type="radio"][value*="reteniendo"], input[type="radio"]:near(:text("reteniendo"))'
    );
    this.log('contribution-type', 'success', 'Selected retention option');
  }

  private async clickContinue(): Promise<void> {
    this.log('continue', 'success', 'Clicking continue');
    await this.page!.click('button:has-text("Continuar"), input[value="Continuar"]');
    await this.page!.waitForLoadState('networkidle');
  }

  private async fillBoletaForm(boletaData: BoletaData): Promise<void> {
    this.log('fill-form', 'success', 'Filling boleta form');
    await this.page!.fill('input[name*="rut"], input[id*="rut"]', boletaData.receptorRut);
    await this.page!.fill(
      'textarea[name*="detalle"], textarea[name*="descripcion"], textarea',
      boletaData.serviceDescription
    );
    await this.page!.fill(
      'input[name*="monto"], input[name*="total"], input[type="number"]',
      boletaData.totalAmount.toString()
    );
    await this.page!.click('button[type="submit"], input[type="submit"]');
    await this.page!.waitForLoadState('networkidle');
    this.log('fill-form', 'success', 'Form submitted successfully');
  }

  private async captureConfirmation(): Promise<Partial<SIIBotResult>> {
    this.log('capture', 'success', 'Capturing confirmation data');
    const screenshotPath = `/tmp/boleta-${Date.now()}.png`;
    await this.page!.screenshot({ path: screenshotPath, fullPage: true });

    let boletaNumber: string | undefined;
    let folio: string | undefined;

    try {
      const boletaText = await this.page!.textContent('text=/Boleta N°|Número/');
      const folioText = await this.page!.textContent('text=/Folio/');
      boletaNumber = boletaText || undefined;
      folio = folioText || undefined;
    } catch {
      this.log('capture', 'warning', 'Could not extract boleta number or folio');
    }

    return {
      boletaNumber,
      folio,
      screenshotPath,
    };
  }

  async close(): Promise<void> {
    this.log('cleanup', 'success', 'Closing browser');
    if (this.browser) {
      await this.browser.close();
    }
  }
}
