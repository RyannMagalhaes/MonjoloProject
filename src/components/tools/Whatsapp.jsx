import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Whatsapp() {
    return (
        <FloatingWhatsApp
            phoneNumber='190'
            accountName='Roberto Campos Neto'
            statusMessage=''
            chatMessage='Olá, em que podemos ajudar?'
            placeholder='Olá! meu nome é...'
            allowEsc={true}
            allowClickAway={true} />
    )
}