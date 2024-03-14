import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useModal } from './FuneralModalContext';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputMask from 'react-input-mask';

function FuneralModal() {

    const { isModalOpen, closeModal, plan } = useModal();
    const [loading, setLoading] = useState(false)
    const form = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.target)

        fetch('https://script.google.com/macros/s/AKfycbyid8Sf4SsQOeXD2-IzmE1hqTI0TdNVuUzQZcD4_jPUiAD6CozWDdwAm_wnWzJCDgDAzA/exec', {
            method: 'POST',
            body: formData
        })
            .then((res) => res.text())
            .then((data) => {
                toast.success("Formulário enviado com sucesso, em breve um de nossos consultores entrará em contato.", {
                    position: "top-right",
                    autoClose: 3000,
                });
                setLoading(false)
            })
            .catch((error) => {
                toast.error("Algo deu errado, tenta novamente mais tarde.", {
                    position: "top-right",
                    autoClose: 3000,
                });
                setLoading(false)
            })
            .finally(() => {
                console.log('deu bom acho');
            })
    }

    return (
        <>
            <Modal className='modal_wrapp' show={isModalOpen} onHide={closeModal}>
                <form onSubmit={handleSubmit} ref={form} className='form_modal_funeral' action="">
                    <Modal.Header closeButton>
                        <Modal.Title>Contratar plano</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type='hidden' name='Plano_PAX_1' value={plan === 1 ? 'Selecionado' : 'Não Selecionado'} />
                        <input type='hidden' name='Plano_PAX_2' value={plan === 2 ? 'Selecionado' : 'Não Selecionado'} />
                        <input
                            type="number"
                            name="Vidas"
                            id="Name"
                            required
                            placeholder="Qtd de vidas:"
                        />
                        <input
                            type="text"
                            name="Nome"
                            id="Name"
                            required
                            placeholder="Nome:"
                        />
                        <InputMask
                            mask="(99) 99999-9999"
                            maskChar="_"
                            alwaysShowMask
                            placeholder="Digite seu telefone"
                        >
                            {(inputProps) => <input {...inputProps} type="tel" name="Telefone" id="Name" required />}
                        </InputMask>
                        <input
                            type="email"
                            name="Email"
                            id="Name"
                            required
                            placeholder="E-mail:"
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Cancelar
                        </Button>
                        <Button variant="primary" disabled={loading} type='submit'>
                            {loading ? 'Enviando..' : 'Solicitar cotação'}
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default FuneralModal;