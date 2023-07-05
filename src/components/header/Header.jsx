import "../../css/header.css"
import React, { useState, useEffect } from 'react';
import logo from "../../images/logo.jpg"

// // export default function Header() {

// //     return (
// //         <header className="header1">
// //             <nav>
// //                 <ul>
// //                     <li><a href="#diferencial">Diferencial</a></li>
// //                     <li><a href="#catalogo">Catálogo</a></li>
// //                     <li><a href="#quemsomos">Quem somos</a></li>
// //                     <li>
// //                         <img src={logo}alt="" />
// //                     </li>
// //                     <li><a href="#depoimentos">Depoimentos</a></li>
// //                     <li><a href="#compre">Compre</a></li>
// //                     <li><a href="#contato">Contato</a></li>
// //                 </ul>
// //             </nav>
// //         </header>
// //     )
// // }


// export default function Header() {
//     const [scrollPos, setScrollPos] = useState(0);
//     const [isVisible, setIsVisible] = useState(true);
  
//     useEffect(() => {
//       const handleScroll = () => {
//         const currentScrollPos = window.pageYOffset;
//         const isVisible = scrollPos > currentScrollPos || currentScrollPos === 0;
//         setScrollPos(currentScrollPos);
//         setIsVisible(isVisible);
//       };
  
//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }, [scrollPos]);
  
//     return (
//       <header className={`header1 ${isVisible ? '' : 'header-hidden'}`}>
//         <nav>
//           <ul>
//             <li><a href="#diferencial">Diferencial</a></li>
//             <li><a href="#catalogo">Catálogo</a></li>
//             <li><a href="#quemsomos">Quem somos</a></li>
//             <li>
//               <img src={logo} alt="" />
//             </li>
//             <li><a href="#depoimentos">Depoimentos</a></li>
//             <li><a href="#compre">Compre</a></li>
//             <li><a href="#contato">Contato</a></li>
//           </ul>
//         </nav>
//       </header>
//     );
//   }


export default function Header() {
  const [scrollPos, setScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = scrollPos > currentScrollPos || currentScrollPos === 0;
      setScrollPos(currentScrollPos);
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header1 ${isVisible ? '' : 'header-hidden'}`}>
      <nav>
        <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <div className="hamburger"></div>
        </div>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#diferencial">Diferencial</a></li>
          <li><a href="#catalogo">Catálogo</a></li>
          <li><a href="#quemsomos">Quem somos</a></li>
          <li>
            <img src={logo} alt="" />
          </li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#compre">Compre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
