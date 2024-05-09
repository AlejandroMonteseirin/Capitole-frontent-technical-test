import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return value; // Si el valor es nulo o indefinido, devolverlo sin cambios
        return value.charAt(0).toUpperCase() + value.slice(1); // Capitalizar la primera letra y unir con el resto de la cadena
    }
}
