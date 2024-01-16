 // Function to change language
 function changeLanguage(lang) {
    const currentLang = sessionStorage.getItem("selectedLanguage") || "En";

    if (currentLang !== lang) {
      sessionStorage.setItem("selectedLanguage", lang);
      updateLanguage();
    }
  }

  // Function to update language elements
  function updateLanguage() {
    const lang = sessionStorage.getItem("selectedLanguage") || "En";
    document.getElementById("arLang").innerText = lang;

    const navItems = ["Home", "Users", "Incident Category", "System Report"];

    for (let i = 0; i < navItems.length; i++) {
      const elementId = "nav" + i;
      const element = document.getElementById(elementId);

      if (element) {
        element.innerText = (lang === "Ar") ? getArabicText(i) : navItems[i];
      }
    }

    const currentStylesheet = document.getElementById("stylesheetLink").getAttribute("href");
    const newStylesheet = "CSS/" + lang.toLowerCase() + "-style.css";

    if (currentStylesheet !== newStylesheet) {
      document.getElementById("stylesheetLink").href = newStylesheet;
    }
  }

  // Function to get Arabic text for navigation
  function getArabicText(index) {
    const arabicText = ["الصفحة الرئيسية", "المستخدمين", "فئة الحوادث", "تقاريرالنظام"];
    return arabicText[index] || '';
  }

  // Attach the event listener for window load
  window.onload = function () {
    updateLanguage();
  };
  