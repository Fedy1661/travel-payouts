import React, { useState } from 'react';

const IconCopy = ({ promocode }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(promocode)
  }
  return (
    <>
      <svg className='icon-copy' onClick={copyToClipboard} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 3.5C10 3.22386 9.77614 3 9.5 3H0.5C0.223858 3 0 3.22386 0 3.5V15.5C0 15.7761 0.223858 16 0.5 16H9.5C9.77614 16 10 15.7761 10 15.5V3.5ZM8 5.5C8 5.22386 7.77614 5 7.5 5H2.5C2.22386 5 2 5.22386 2 5.5V13.5C2 13.7761 2.22386 14 2.5 14H7.5C7.77614 14 8 13.7761 8 13.5V5.5Z" fill="#0085FF" />
        <path d="M4 0.5C4 0.223858 4.22386 0 4.5 0H13.5C13.7761 0 14 0.223858 14 0.5V12.5C14 12.7761 13.7761 13 13.5 13H11.5C11.2239 13 11 12.7761 11 12.5V11.5C11 11.2239 11.2239 11 11.5 11C11.7761 11 12 10.7761 12 10.5V2.5C12 2.22386 11.7761 2 11.5 2H4.5C4.22386 2 4 1.77614 4 1.5V0.5Z" fill="#0085FF" />
      </svg>
    </>
  )
}

export default ({ getBonuses, getBalance, getNextPayout }) => {
  const [bonuses, setBonuses] = useState(getBonuses());
  let inputFilter = null;
  const setFilter = (e) => {
    const filterText = e.target.value
    const result = getBonuses().filter(({ title }) =>
      title.toLowerCase().indexOf(filterText.toLowerCase()) > -1);
    setBonuses(result)
  }
  const clearFilter = () => {
    setBonuses(getBonuses())
    inputFilter.value = '';
  }
  return (
    <div className="content">
      <div className="content__info">
        <div className="content__about-money">
          Баланс
        <span className="content__cash">{getBalance()} ₽</span>
        </div>
        <div className="content__about-money">
          К выплате
        <span className="content__cash">{getNextPayout()} ₽</span>
        </div>
      </div>
      <div className="content__services">
        <h1 className="content__title">
          Сервисы
        </h1>
        <div className="content__filter">
          <div className="content__filter-title">Фильтр</div>
          <div className="content__filter-form">
            <input type="text" ref={el => inputFilter = el}
              className="content__input" onChange={setFilter} />
            <button onClick={clearFilter} className="content__filter-button">Сбросить</button>
          </div>

        </div>
        <div className="content__list-services">
          {
            bonuses.map(({ title, description, promocode, link }) => {
              return (
                <div key={title} className="content__card">

                  <div className="content__card-descr">
                    <span className="content__card-title">{title}</span>
                    {description}
                  </div>

                  <div className="content__card-wrapper">
                    <div className="content__card-promo">
                      <span className="content__card-promo-title">Промокод</span>
                      <div className="content__card-input content__input">
                        {promocode}
                        <IconCopy promocode={promocode} />
                      </div>
                    </div>
                    <a href={link} rel="noopener noreferrer"
                      target="_blank" className="content__card-link">Получить бонус</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}