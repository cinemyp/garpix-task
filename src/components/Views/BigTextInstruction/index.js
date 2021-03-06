import style from "./style.module.scss";
import React from "react";
import DefaultTitle from "../DefaultTitle";

const BigTextInstruction = ({ count, listInstructions, listInstructions2 }) => {
  return (
    <div className={style["content"]}>
      <div className={style["bigtextinstruction_first"]}>
        <DefaultTitle
          className={style["bigtextinstruction_first_title"]}
          title={
            "Обменивайте " +
            count +
            " СПАСИБО на месяц подписки в Apple Music и наслаждайтесь любимой музыкой без перерыва."
          }
        />
        <ul>{listInstructions}</ul>
      </div>
      <div className={style["bigtextinstruction_second"]}>
        <DefaultTitle
          className={style["bigtextinstruction_second__title"]}
          title={"Как использовать промо-код:"}
        />
        <ol>{listInstructions2}</ol>
      </div>
      <div className={style["bigtextinstruction_thrid"]}>
        <div className={style["bigtextinstruction_thrid__bigtext1"]}>
          Под персональными данными в целях настоящих Правил понимаются персональные данные Участников Акции и иных лиц - субъектов персональных данных как они определены в Законе "О персональных данных". Под обработкой персональных данных в настоящих{" "} <b>Правилах понимается любое действие</b> (операция), совершаемое в целях проведения Акции, или совокупность действий (операций),совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор,запись, систематизацию, накопление, хранение, уточнение,(обновление,изменение), извлечение, использование, передачу (распространение,предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных, предоставленных Участником Акции Банку/ Уполномоченной Компании.
        </div>
        <div className={style["refs"]}>
          <a className={style["refs__ref"]}>
            Подробнее об Apple Music для Android
          </a>
          <a className={style["refs__ref"]}>Правила акции</a>
        </div>

        <div className={style["bigtextinstruction_thrid__bigtext2"]}>
          Только при оформлении индивидуальной подписки. По окончании пробного
          периода подписка будет продлена автоматически. 4 месяца бесплатно
          только для новых подписчиков. Срок действия кода истекает 31 Января
          2020 года. Это промокод, который не подлежит перепродаже, обмену на
          денежный эквивалент и замене в случае кражи или потери. Предложение
          действительно при оформлении индивидуальную подписки на Apple Music на
          территории Российской Федерации. Требуется учетная запись iTunes.
          Применяются соответствующие условия <a href="/">(подробнее)</a>.
          <div>
            Промокодом может воспользоваться лицо старше 13 лет, чье
            местоположение совпадает со страной/регионом магазина, в котором
            активируется код.
          </div>
          <div>
            Требуются совместимые продукты и сервисы. Apple Music -
            зарегестрированная торговая марка Apple. Apple не является
            участником или спносором этой промоакции.
          </div>
        </div>
      </div>
    </div>
  );
};
export default BigTextInstruction;
