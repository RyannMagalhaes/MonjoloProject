import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Whatsapp() {
    return (
        <FloatingWhatsApp
            phoneNumber='190'
            accountName='Monjolo Alimentos'
            chatMessage='Olá, em que podemos ajudar?'
            placeholder='Olá! meu nome é...'
            autoOpen={true}
            allowEsc={true}
            allowClickAway={true} />
    )
}