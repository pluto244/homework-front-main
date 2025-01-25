import { useState } from 'react';

export const HW3 = () => {
  // 1️⃣ Раскомментируйте JSX(HW3.tsx) и вы увидите,
  // что приложение начнет гореть красным и ругаться 😡
  // 2️⃣ Ваша задача: ❗ПОЧИНИТЬ ПРОЕКТ❗
  // - прописать типизацию, где необходимо
  // - починить все, что горит красным
  // - дописать функциональность (где указано комментариями)
  // - приложение должно компилироваться и запускаться в браузере

  // ❗ Массив с данными не трогаем! Текст не меняем !

  const [currentText, setCurrentText] = useState('');
  const [texts, setTexts] = useState<string[]>([
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
  ]);

<<<<<<< HEAD
  const handleChange = (event: any) => {
    setCurrentText(event.target.value);
  };

  const handleSave = () => {
    setTexts([...texts, currentText])
    setCurrentText('')
=======
  const handleChange = (event: 'НУЖНО ПРОТИПИЗИРОВАТЬ') => {
    // setCurrentText(ЧЕГО-ТО НЕ ХВАТАЕТ);
  };

  const handleSave = () => {
    // ЗАСЕТАТЬ БЫ ТЕКСТ В texts И НЕ ПОТЕРЯТЬ НАПУТСТВИЕ ИЗ ПРОШЛОГО ВЕКА)
    // А ЗАТЕМ УБРАТЬ ЗА СОБОЙ В currentText
>>>>>>> 705fd64 (Initial Commit)
  };

  return (
    <div id={'hw03'}>
<<<<<<< HEAD
      {currentText ? (
        <h1 id={'hw03-text'}>{currentText}</h1>
      ) : (
        <h1 id={'hw03-default-text'}>Здесь появится новое дело</h1> // ничего не меняем, здесь все норм
      )}

      <input id={'hw03-input'} type="text" value={currentText} onChange={handleChange} />

      <button id={'hw03-button'} onClick={handleSave}> 
        Сохранить
      </button>

      <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

      <ol id={'hw03-tasks'}>
        {texts.map((el, index) => {
          return (
            <li key={index} id={`hw03-task-${index}`}>
              {el}
            </li>
          );
        })}
      </ol>
=======
      {/*{currentText ? (*/}
      {/*  <h1 id={'hw03-text'}>ЗДЕСЬ ХОТЕЛОСЬ БЫ УВИДЕТЬ ВВОДИМЫЙ ТЕКСТ</h1>*/}
      {/*) : (*/}
      {/*  <h1 id={'hw03-default-text'}>Здесь появится новое дело</h1> // ничего не меняем, здесь все норм*/}
      {/*)}*/}

      {/*<input id={'hw03-input'} type="text" value={currentText} onChange={handleChange} />*/}

      {/*<button id={'hw03-button'} onClick={() => {}}> // НЕ ХВАТАТЕТ ФУНКЦИИ*/}
      {/*  Сохранить*/}
      {/*</button>*/}

      {/*<h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>*/}

      {/*<ol id={'hw03-tasks'}>*/}
      {/*  {ОТРИСОВАТЬ МАССИВ.map((el, index) => {*/}
      {/*    return (*/}
      {/*      <li key={index} id={`hw03-task-${index}`}>*/}
      {/*        {el}*/}
      {/*      </li>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</ol>*/}
>>>>>>> 705fd64 (Initial Commit)
    </div>
  );
};
