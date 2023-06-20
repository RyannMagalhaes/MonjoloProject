import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Whatsapp() {
    return (
        <FloatingWhatsApp
            phoneNumber='190'
            accountName='Roberto Campos Neto'
            statusMessage=''
            chatMessage='eai deLisia, vamo tc?'
            placeholder='vamo dms, mete 3 buneco em min'
            allowEsc={true}
            allowClickAway={true} />
    )
}