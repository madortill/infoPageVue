<template>
    <div class='bodySpeech'>
        <!-- <img src="@/assets/introSpeech.svg" alt="speech" class='speech' /> -->
        <div class="head">דבר המפקד</div>
        <div class="quote"> "מעולם לא פגשתי אדם שלא <br> ניתן היה ללמוד ממנו משהו" (גלילאו גליליי)</div>
        <div class="theSpeach">
            מפקדי וחיילי קריית ההדרכה,
            קריית ההדרכה נשענת על קונספט ייחודי, מאגדת בתוכה שבעה בסיסי הדרכה ממערכים וחילות שונים, בעלי שפה הדרכתית ופסיפס אנושי שונה. <br>
            יחד עם זאת, ישנה מטרה משותפת לכולם: <br>
            שער הכניסה לצה”ל, הכשרתם ועיצוב דמותם של אלפי בני נוער מכל שכבות העם, המתגייסים לצה”ל מדי שנה. <br>
            קריית ההדרכה מהווה כר פורה של עשייה הדרכתית מצוינת,
            אפקטיבית ויצירתית, הנותנת מענה במגוון שיטות צורות ואמצעים.
            המשיכו לקדם את עולמות ההדרכה, לשתף וליצור קהילה ארגונית לומדת.
        </div>
        <div class="theSpeach signature">
            <!-- בברכה, <br> -->
            <p class="line1">בברכה,</p>
            דודו בר עוז ,<p class="line2">אל"ם</p><br>
            מפקד קריית ההדרכה 
        </div>
        <img src="@/assets/building.svg" alt="building" class='building' />

    </div>
</template>

<script>
    export default {
        name: 'Speech'
    }
</script>

<style>
.bodySpeech {
    height: 90%;
    width: 90%;
    margin-top: 3vh;
    margin-right: 5vw;
    position: relative;
    z-index: 2;

}

.building {
    margin-right: -20%;
    height: 28vh;
    width: 95vw;
}

.head {
    font-family: "assistantBold";
    text-align: center;
    font-size: 2em;
}

@font-face {
  font-family: "assistantBold";
  src: url("/fonts/Assistant/static/Assistant-Bold.ttf");
}

.quote {
    font-family: "yad-light";
    text-align: center;
    font-size: 1em;
    font-weight: bold;
}

@font-face {
  font-family: "yad-light";
  src: url("/fonts/GYADL.TTF");
}

.theSpeach {
    margin-top: 5%;
    font-family: "assistantSemiBold";
    font-size: 1em;
}

@font-face {
  font-family: "assistantSemiBold";
  src: url("/fonts/Assistant/static/Assistant-SemiBold.ttf");
}

.line2 {
    display: inline;
    position: absolute;
    right: 85%;
}

.signature {
    margin-right: 60%;
}

.line1 {
    margin-right: -10%;
}

</style>