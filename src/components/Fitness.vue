<template>
  <div class="fitContainer">
    <div class="titleContainer">
      <img src="@/assets/heartIcon.svg" alt="Heart" class="heartIcon" />
      <div class="titleCenter">פנאי וכושר</div>
    </div>
    <img
      src="@/assets/backArrow.png"
      alt="back"
      class="backArrow"
      @click="$emit('goBack')"
    />
    <div class="gymContainer">
      <div class="gymText">
        <div class="libraryContainer">
          <TitleButton>ספרייה</TitleButton>
          <div class="libraryText">
            מיקום -מרכז מסחרי, קומה 1 <br />
            מתחם נוח וחדשני הכולל פינות ישיבה ועבודה. <br />
            לשירותכם שירותי השאלת ספרים, שירותי הדפסה באזרחי וצבאי,
            <br />עבודה על בסיס מחשבים צבאיים ואינטרנט, 2 חללי לימוד ועבודה
            קבוצתיים בתיאום מול ספרנית. <br />
            טל - <a href="tel:073-3772447">073-3772447</a> או דרך מייל צבאי: טל
            וקסלבלט ctrl+k <br />
            <b>שעות פעילות:</b> <br />
            א'-ד': 08:00-17:00, &nbsp; 19:00-22:00. <br />
            ה': 08:00-17:00 <br />
          </div>
        </div>
        <div class="keep-as-one">
          <TitleButton> מועדון רווחה קריית ההדרכה</TitleButton>
          <div class="libraryText">
            המועדון מופעל לשימוש ולרווחת חיילי ומפקדי כלל יחידות קריית ההדרכה.
            <br />
            שעות פתיחה של המועדון: <br />
            ימים א׳-ה׳: <span class="nobreak">15:30-22:00</span> <br />
            שישי: <span class="nobreak">16:00-22:00</span> <br />
            שבת: <span class="nobreak">13:00-22:00</span>
          </div>
        </div>
        <TitleButton class="titleNameGym">חדר כושר</TitleButton>
        מיקום -קריית הספורט, קומה 1 <br />
        בחדר הכושר תוכלו למצוא מגוון מכשירי אירובי וכוח כגון: הליכונים, מכשיר
        אליפטי, אופניים, מכשירי כוח והתנגדות ומשקלים חופשיים לאימונים מכל
        הסוגים. <br />
        בנוסף תוכלו להיעזר במדריכי הכושר והמדא״גיות הנמצאים במתחם לכל שאלה.
        <br /><b>שעות פתיחה:</b>
        <p>א-ה 06:00-22:00</p>
        <p>ו- 06:00-13:00</p>
        <br />
        שעות מגדריות: <br />
        יום ב' - 8:00-10:00 בנות, 20:00-22:00 בנים <br />
        יום ד' - 8:00-10:00 בנים, 20:00-22:00 בנות <br />
        <p>שעות רישום לחדר כושר -14:00 - 12:00</p>
        <br />
        שעות קורסים: <br />
        יום א' - 6:00-14:00 , 18:00-20:00 <br />
        יום ב' - 6:00-8:00 , 17:00-19:00 <br />
        יום ג' - 8:00-10:00 , 18:00-20:00 <br />
        יום ד' - 6:00-8:00 , ;17:00-19:00 <br />
        יום ה' - 13:00-22:00 <br />

        <br />
        תהליך הרישום: <br />
        הגעה למשרד מדור א"ג, כניסה לאתר צה"ל -> שאלון א"ס -> הצגת הציון למדריך
        -> מילוי פרטים אישיים. <br />
        מתקיימים חוגים קבועים בקריית הספורט, להצטרפות יש לכתוב לרמ"ד כושר<br />
        <p>
          לרישום לאימונים : אדל אדלשטיין
          <a href="tel:050-6991309">050-6991309</a>
        </p>
        <br />
        <p>*הכניסה לחדר הכושר לאחר הרשמה והצגת חוגר בכניסה.</p>
        <p>*כל מתאמן מחויב להגיע על מדי ספורט תקניים ועם מגבת אישית.</p>
        <p>* אין כניסה עם נשק לחדר הכושר</p>
        <p>*כל מתאמן מעל גיל 23 או מתחת לפרופיל 72 נדרש לאישור רופא.</p>
        <p>
          *כניסה לחיילי קורסים אשר הגיעו לקורס
          <b> משירותם הסדיר בלבד! </b>
        </p>
        <p>*בזמן שעות הפתיחה של הקורסים גם סגל רשאי להיכנס.</p>
      </div>
    </div>
    <div class="fitTextContainer">
      <!-- <div class="cols"> -->
      <div class="cols poolText">
        <div class="keep-as-one">
          <TitleButton>בריכה</TitleButton>
          מיקום -קריית הספורט, קומת כניסה <br />
          <p>בקריית הספורט קיימת בריכת שחייה חצי אולימפית.</p>
          <b>שעות פעילות:</b> <br />
          ראשון- 14:30-19:00<br />
          שני- 6:30-11:30 <br />
          שלישי- 6:30-11:30<br />
          רביעי- 14:30-19:00<br />
          חמישי- 6:30-11:30 <br />
          <b>שעות מגדריות:</b> <br />
          חיילות יום ראשון- 17:00-19:00 <br />
          חיילים יום רביעי- 17:00-19:00 <br />
          בריכה נסגרת ב16:00 לאיפוס לטובת המגדרי ונפתחת מחדש לאותו מגדר רלוונטי
          ב17:00<br />

          <b>דגשים:</b> <br />
          <p>*יש לוודא הרשמה לחדר הכושר לפני כניסה לבריכה</p>
          <div>
            *כל מתאמן מעל גיל 23 או
            <p>מתחת לפרופיל 72 נדרש</p>
            <p>לאישור רופא.</p>
          </div>
          <p>
            *על כולם למלא הצהרת בריאות מקרפ"ר 300
            <a
              href="https://www.prat.idf.il/lomdot/refua/%D7%A9%D7%90%D7%9C%D7%95%D7%9F-%D7%90%D7%A1/%D7%A9%D7%90%D7%9C%D7%95%D7%9F-%D7%90%D7%A1-%D7%A4%D7%AA%D7%99%D7%97%D7%94/?returnUrl=%2flomdot%2frefua%2f%d7%a9%d7%90%d7%9c%d7%95%d7%9f-%d7%90%d7%a1%2f%d7%a9%d7%90%d7%9c%d7%95%d7%9f-%d7%90%d7%a1-%d7%a4%d7%aa%d7%99%d7%97%d7%94%2f"
              >לקישור</a
            >
          </p>
          <p>*כניסה לבריכה עם מגבת בלבד</p>
          <p>*אין הכנסת נשקים, אוכל, שתייה מתוקה וסיגריות לבריכה!</p>
          <p>*תיאום בריכת השחייה מתבצע מול רמ"ד כושר שבוע מראש!</p>
        </div>
        <img src="@/assets/pool.svg" alt="pool" class="poolPic" />
        <div class="genericText1">
          שאר מתקני קריית הספורט פועלים בתיאום מול המדא״גים של הבה״דים, כמו כן
          כניסה לכל מתקן היא בעזרת מדא"ג הבה"ד בנוסף ישנם חוגי מפקדה לכלל מפקדות
          הבה״דים.
        </div>
      </div>
      <div>
        <TitleButton>קציני אימון גופני בקריית ההדרכה:</TitleButton>
        <ul class="libraryText">
          <li>
            רמ״ד כושר- סגן שי כרמלי <a href="tel:0507689308">050-7689308</a>
          </li>

          <li>
            קא״גית בה״ד 7, 11, 20, חינוך ובית ספר לפיקוד - סג"ם דניאל
            <a href="tel:0527093131">052-7093131</a>
          </li>

          <li>
            קא״גית בה״ד 6, 10, 13 ומפקדה - סגן אביטל פיליפסון
            <a href="tel:0587203843">058-7203843</a>
          </li>
        </ul>
      </div>
      <div>
        <TitleButton>מדריכי אימון גופני בקריית ההדרכה:</TitleButton>
        <ul class="libraryText">
          <li>
            בה״ד 6- אדם אלגלי - <a href="tel:050-9660555">050-9660555</a> ושיר
            מיכאלי - <a href="tel:058-6999493">058-6999493</a>
          </li>
          <li>
            סיוע מנהלתי קרבי - מור מרלי
            <a href="tel:058-6999493">058-6999493</a> ומיכל בקנשטיין
            <a href="tel:058-6999493">058-6999493</a>
          </li>

          <li>
            בה״ד 13- נעה כהן - <a href="tel:058-7033363 ">058-7033363 </a><br />
            &nbsp; ומעיין עוקשי - <a href="tel:054-3403313">054-3403313</a>
          </li>
          <li>
            בה״ד 11- הילה בית און- <a href="tel:058-5002607">058-5002607</a>
          </li>

          <li>
            בה״ד 7- יהלי רביד ,- <a href="tel:055-8812730 ">055-8812730 </a
            ><br />
            &nbsp; סתיו אפק - <a href="tel:050-2950181">050-2950181</a> &nbsp;
            טלי סמואלסון - <a href="tel:050-2950181">050-2950181</a>
          </li>

          <li>
            בה״ד 20- דניאל לאופר - <a href="tel:054-4363131">054-4363131</a
            ><br />
          </li>
          &nbsp;
          <li>
            בה״ד חינוך- מאיה ארז- <a href="tel:052-5993177">052-5993177</a>
          </li>
          <li>
            בית ספר לפיקוד- מאיה ארז- <a href="tel:052-5993177">052-5993177</a>
          </li>

          <li>
            בה״ד 10- יעל קורילוב-
            <a href="tel:054-4314875">054-4314875</a>,<br />
            &nbsp; טל אלון - <a href="tel:058-6263100">058-6263100</a>,<br />
            &nbsp; ארקייט דרומי- <a href="tel: 050-7192063"> 050-7192063</a>
            <br />
            &nbsp; הילי סילס- <a href="tel: 053-8204829"> 053-8204829</a> <br />
            &nbsp; ושחר חיים - <a href="tel:053-8259252">053-8259252</a> <br />
          </li>
          &nbsp;

          <li>
            מפקדה קריית ההדרכה - טלי סמואלסון -
            <a href="tel:050-2950181">050-2950181</a>
          </li>
          <li>
            מדריך קרב מגע- אלירן שמח- <a href="tel:052-2935635">052-2935635</a>
          </li>
          <li>
            מצילים- רותם צרפתי <a href="tel:054-3938872">054-3938872</a> &nbsp;
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TitleButton from "./TitleButton.vue";

export default {
  data() {
    return {};
  },
  components: { TitleButton },
};
</script>

<style>
.heartIcon {
  height: 4vh;
  width: 9vw;
  margin-right: 1vw;
}

.fitContainer {
  margin-top: 4vh;
  position: relative;
}

.titleCenter {
  font-size: 4vh;
  font-weight: 700;
  margin-left: 1vw;
}

.fitTextContainer {
  margin-right: 7vw;
  padding-bottom: 3vh;
  font-size: 1.7vh;
  font-weight: 600;
  direction: rtl;
  height: fit-content;
}

.gymContainer {
  font-size: 1.7vh;
  font-weight: 600;
  direction: rtl;
}

.gymText,
.poolText,
.libraryText {
  max-width: 93vw;
}

.gymText {
  /* background: linear-gradient(180deg, #cae3ea, #88bbe3); */
  width: 100vw;
  padding-right: 7vw;
}

.poolText {
  min-width: 40vw;
}

.poolPic {
  height: 60vh;
  /* position: relative;
    bottom: 85vh;
    right: 45vw; */
}

.genericText1 {
  margin-top: 2vh;
  max-width: 85vw;
  column-span: all;
}

.titleNameGym {
  height: 7.25vh;
  width: 30vw;
}

.backArrow {
  width: 8vw;
  position: absolute;
  left: 2vw;
  top: 2vh;
  transform: rotate(90deg);
}

.cols {
  columns: 2;
}

.libraryContainer,
.poolText {
  margin-top: 1vh;
}
</style>
