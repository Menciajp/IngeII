import React from 'react';
import './ReportePagos.css';
import '../../styles/theme.css';

export default function ReportePagos() {
  // Historial agrupado por Rango de Fechas / Períodos (Corte de Control)
  const rangosDeFechas = [
    {
      rango: 'Período: 2026 (Primer Semestre)',
      pagos: [
        { id: 1, mes: 'Julio 2026', precio: '$20.000', interes: '$0', estado: 'Pendiente de Pago', fecha: '--/--/----', claseEstado: 'pendiente' },
        { id: 2, mes: 'Junio 2026', precio: '$20.000', interes: '$1.500', estado: 'Fuera de Término', fecha: '18/06/2026', claseEstado: 'fuera-termino' },
        { id: 3, mes: 'Mayo 2026', precio: '$20.000', interes: '$0', estado: 'Pagado', fecha: '03/05/2026', claseEstado: 'pagado' },
      ]
    },
    {
      rango: 'Período: 2026 (Cierre Anterior / Actualizaciones)',
      pagos: [
        { id: 4, mes: 'Abril 2026', precio: '$18.000', interes: '$0', estado: 'Pagado', fecha: '02/04/2026', claseEstado: 'pagado' },
        { id: 5, mes: 'Marzo 2026', precio: '$18.000', interes: '$1.200', estado: 'Fuera de Término', fecha: '20/03/2026', claseEstado: 'fuera-termino' },
      ]
    }
  ];

  return (
    <div className="mi-pantalla rp-wrapper">
      
      {/* Indicador superior de salida impresa */}
      <div className="rp-print-notice">
        <span>📄 [Salida Impresa / Reporte PDF] - Documento generado para impresión (Incluye Corte de Control por Fechas)</span>
        <button className="btn btn-outline" onClick={() => window.print()}>🖨️ Imprimir / Guardar</button>
      </div>

      {/* Hoja de Reporte Estilo A4 */}
      <div className="rp-sheet">
        
        {/* Encabezado Azul */}
        <header className="rp-sheet-header">
          <h1 className="rp-logo-text">CorporeGym</h1>
          <div className="rp-header-info">
            <strong>Reporte de Pagos</strong>
            <span>Emitido por: Carlos Méndez</span>
            <span>Fecha del Día: 05/07/2026</span>
          </div>
        </header>

        {/* Cuerpo del Reporte */}
        <div className="rp-sheet-body">
          
          <h3 className="rp-section-title">Ficha del Alumno</h3>

          {/* Datos del alumno en un solo renglón */}
          <div className="rp-alumno-single-line card">
            <div className="rp-inline-item"><strong>Apellido:</strong> Pérez</div>
            <div className="rp-inline-item"><strong>Nombre:</strong> Juan</div>
            <div className="rp-inline-item"><strong>DNI:</strong> 45841133</div>
            <div className="rp-inline-item"><strong>Estado:</strong> <span className="status-activo">Activo</span></div>
          </div>

          <h3 className="rp-section-title" style={{ marginTop: '2rem' }}>Historial de Pagos y Deudas</h3>

          {/* Tabla con Corte de Control por rango de fechas */}
          <div className="table-responsive">
            <table className="custom-table rp-table">
              <thead>
                <tr>
                  <th>Mes</th>
                  <th>Precio</th>
                  <th>Interés</th>
                  <th>Estado de Pago</th>
                  <th>Fecha de Pago</th>
                </tr>
              </thead>
              <tbody>
                {rangosDeFechas.map((grupo, index) => (
                  <React.Fragment key={index}>
                    {/* Fila de Corte de Control por Rango de Fechas */}
                    <tr className="rp-control-break">
                      <td colSpan="5">
                        📅 <strong>{grupo.rango}</strong>
                      </td>
                    </tr>

                    {grupo.pagos.map((pago) => (
                      <tr key={pago.id}>
                        <td className="rp-td-bold" style={{ paddingLeft: '1.5rem' }}>└ {pago.mes}</td>
                        <td>{pago.precio}</td>
                        <td className="rp-interes-col">{pago.interes}</td>
                        <td>
                          <span className={`rp-status-badge ${pago.claseEstado}`}>
                            {pago.estado}
                          </span>
                        </td>
                        <td className="rp-td-date">{pago.fecha}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Pie de página con número de página */}
        <footer className="rp-sheet-footer">
          <span>CorporeGym - Sistema de Gestión Integral</span>
          <span className="rp-page-number">Página 1 de 1</span>
        </footer>

      </div>
    </div>
  );
}