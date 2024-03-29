import { Link } from "react-router-dom";

const items = [
    {
        id: 1,
        benefit: 'Consulta veterinária de rotina',
        basico: '1 por vigência, limite R$200,00',
        completo: '1 por vigência, limite R$200,00',
        plus: '3 por vigência, limite R$150,00'
    },
    {
        id: 2,
        benefit: 'Consulta veterinária emergencial',
        basico: '',
        completo: '1 por vigência, limite R$200,00',
        plus: '2 por vigência, limite R$200,00'
    },
    {
        id: 3,
        benefit: 'Transporte leva e traz',
        basico: '1 por vigência, limite R$100,00',
        completo: 'Ilimitado',
        plus: '2 por vigência, limite R$100,00'
    },
    {
        id: 4,
        benefit: 'Agendamento de consultas',
        basico: 'Ilimitado',
        completo: 'Ilimitado',
        plus: 'Ilimitado'
    },
    {
        id: 5,
        benefit: 'Informações sobre clínicas e vacinas',
        basico: 'Ilimitado',
        completo: 'Ilimitado',
        plus: 'Ilimitado'
    },
    {
        id: 6,
        benefit: 'Concierge veterinário',
        basico: '',
        completo: '',
        plus: 'Ilimitado'
    },
    {
        id: 7,
        benefit: 'Consulta com especialista',
        basico: '',
        completo: '',
        plus: '1 por vigência, limite R$200,00'
    },
    {
        id: 8,
        benefit: 'Hospedagem em caso de viagem',
        basico: '1 por vigência até 2 diárias, limite R$300,00',
        completo: '2 por vigência até 2 diárias, limite R$300,00',
        plus: '1 por vigência, limite R$500,00'
    },
    {
        id: 9,
        benefit: 'Vacinas e aplicações',
        basico: '',
        completo: '',
        plus: '1 por vigência, limitado a 1 pet, limite R$150,00'
    },
    {
        id: 10,
        benefit: 'Castração',
        basico: '',
        completo: '',
        plus: '1 por vigência, limite R$300,00'
    },
    {
        id: 11,
        benefit: 'Exames laboratoriais',
        basico: '',
        completo: '',
        plus: '2 por vigência, limite R$150,00'
    },
    {
        id: 12,
        benefit: 'Exames de imagem',
        basico: '',
        completo: '',
        plus: '1 por vigência, limite R$200,00'
    },
    {
        id: 13,
        benefit: 'Agendamento de leva e traz',
        basico: '',
        completo: '',
        plus: 'Conveniência'
    },
    {
        id: 14,
        benefit: 'Assistência funeral',
        basico: '1 por vigência, até R$300,00',
        completo: '1 por vigência, até R$400,00',
        plus: '1 por vigência, limite R$500,00'
    },
    {
        id: 15,
        benefit: 'Transporte de ração',
        basico: '1 por vigência, até R$50,00',
        completo: '1 por vigência, até R$50,00',
        plus: ''
    },
]

// const RemoveIcon = () => <img width={25} src="assets/imgs/x_icon.png" alt="" />

const PetTable = () => {
    return (

        <div id="price_table" className="container py-4">
            <div className="about__content-6">
                <h3 className="sec-title underline-2 text-white">
                    Conheça nossos planos
                </h3>

                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 24px' ,overflowX: 'auto'}}>
                    <table className="pet__table">
                        <thead>
                            <tr>
                                <th className="text-uppercase" style={{ color: '#d8ff36' }}>Garanta para o seu PET</th>
                                <th className="text-uppercase" style={{ color: '#d8ff36' }}>Plano Básico: R$19,90 / mês</th>
                                <th className="text-uppercase" style={{ color: '#d8ff36' }}>Plano Completo: R$39,90 / mês</th>
                                <th className="text-uppercase" style={{ color: '#d8ff36' }}>Plano Plus: R$59,90 / mês</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.benefit}</td>
                                        <td>{item.basico === '' ? '--' : item.basico}</td>
                                        <td>{item.completo === '' ? '--' : item.completo}</td>
                                        <td>{item.plus === '' ? '--' : item.plus}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>
                                    <Link className="db-btn-arrow text-white" to="#">
                                        Contrate agora <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </th>
                                <th>
                                    <Link className="db-btn-arrow text-white" to="#">
                                        Contrate agora <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </th>
                                <th>
                                    <Link className="db-btn-arrow text-white" to="#">
                                        Contrate agora <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default PetTable