import { ItemFactura } from './item-factura';
import { Cliente } from 'src/app/clientes/cliente';

export class Factura {
    id: number;
    descripcion: string;
    observacion: string;
    createAt: string;
    total: number;
    items: ItemFactura[] = [];
    cliente: Cliente;

    calcularGranTotal(): number {
        this.total = 0;
        this.items.forEach((item: ItemFactura) => {
            this.total += item.calcularImporte()
        });
        return this.total;
    }
}
