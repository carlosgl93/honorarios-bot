import { Delete } from '@mui/icons-material';
import { Grid, IconButton, TextField } from '@mui/material';

import { InvoiceItem } from '@/types/invoice';

interface InvoiceItemRowProps {
  item: InvoiceItem;
  onUpdate: (item: InvoiceItem) => void;
  onDelete: () => void;
  disabled?: boolean;
}

export const InvoiceItemRow = ({ item, onUpdate, onDelete, disabled }: InvoiceItemRowProps) => {
  const handleChange = (field: keyof InvoiceItem, value: string | number) => {
    const updatedItem = { ...item, [field]: value };

    // Recalcular total si cambia cantidad o precio
    if (field === 'cantidad' || field === 'precioUnitario') {
      const cantidad = field === 'cantidad' ? Number(value) : item.cantidad;
      const precio = field === 'precioUnitario' ? Number(value) : item.precioUnitario;
      updatedItem.total = cantidad * precio;
    }

    onUpdate(updatedItem);
  };

  return (
    <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
      <Grid item xs={12} sm={5}>
        <TextField
          fullWidth
          size="small"
          label="Descripción"
          value={item.descripcion}
          onChange={(e) => handleChange('descripcion', e.target.value)}
          disabled={disabled}
          placeholder="Ej: Servicios de consultoría"
        />
      </Grid>
      <Grid item xs={4} sm={2}>
        <TextField
          fullWidth
          size="small"
          type="number"
          label="Cantidad"
          value={item.cantidad}
          onChange={(e) => handleChange('cantidad', e.target.value)}
          disabled={disabled}
          inputProps={{ min: 0, step: 0.01 }}
        />
      </Grid>
      <Grid item xs={4} sm={2}>
        <TextField
          fullWidth
          size="small"
          type="number"
          label="Precio Unit."
          value={item.precioUnitario}
          onChange={(e) => handleChange('precioUnitario', e.target.value)}
          disabled={disabled}
          inputProps={{ min: 0, step: 1000 }}
        />
      </Grid>
      <Grid item xs={3} sm={2}>
        <TextField
          fullWidth
          size="small"
          label="Total"
          value={item.total}
          disabled
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <Grid item xs={1} sm={1}>
        <IconButton onClick={onDelete} disabled={disabled} color="error" size="small">
          <Delete />
        </IconButton>
      </Grid>
    </Grid>
  );
};
