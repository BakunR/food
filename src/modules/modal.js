function openModal (modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    console.log(modalTimerId);
    if (modalTimerId){
        clearInterval(modalTimerId);
    }
}


function closeModal (modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';   
}

function modal (triggerSelector, modalSelector, modalTimerId) {
    const modalTriger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector);

      modalTriger.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });
 
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    
    function showModalbyScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {// якшо висота того що вже проскролино плюс висота в контенту який ми бачимо дорівнює загальній висоті запускаємо функцію показати модальне вікно
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalbyScroll);// видаляємо цю подію , щоб воно виконувалось лиш один раз
        }
    }

    window.addEventListener('scroll', showModalbyScroll);// запускаємо цю дію


}
export default modal;
export {closeModal};
export {openModal};