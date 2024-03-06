import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useModal } from './FuneralModalContext';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FuneralModal() {

    const { isModalOpen, closeModal } = useModal();
    const [loading,setLoading] = useState(false)
    const form = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.target)

        fetch('https://script.google.com/macros/s/AKfycbxnnUAzOx8_WnEvg1pgs1lK40C3wfJEhjIrh933qGf3Plq5PZYWn0-BdXBXd3Wu1JMK8Q/exec', {
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

                        <input
                            type="number"
                            name="Vidas"
                            id="Name"
                            required
                            placeholder="Qtd de vidas:"
                        />
                        <input
                            type="text"
                            name="Name"
                            id="Name"
                            required
                            placeholder="Nome:"
                        />
                        <input
                            type="number"
                            name="Telefone"
                            id="Name"
                            required
                            placeholder="Telefone:"
                        />
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