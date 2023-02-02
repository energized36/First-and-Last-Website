var lastScrollTop; // This Variable will store the top position
var viewportHeight = "-" + (window.innerHeight * 0.15) + "px"; // negative position of nav

let initialNav = document.getElementById('navbar'); 
let initialNavMenu = document.getElementById("nav-menu");

// initialNav.style.height = initialNav.offsetHeight - initialNavMenu.offsetHeight + "px";



var isExpanded = false;
let navMenuBtn = document.getElementById('hamburger-container');
let navbar = document.getElementById('navbar'); 
let flag = document.getElementById("language-flag");

// navbar.style.height = document.getElementById('nav-logo-and-hamburger-container').offsetHeight + "px"; 

// navMenuBtn.onclick = ()=>{
//   let navMenu = document.getElementById("nav-menu");
//   let menuHeightClosed = document.getElementById("nav-logo-and-hamburger-container").offsetHeight - 1 + "px";

//   if (isExpanded == true){
//     // if menu is expanded on click, close it
//       navbar.style.height = menuHeightClosed;
//       isExpanded = false;
//   }

//   else if (isExpanded == false){
//     // if menu is closed on click, open it.
//       navbar.style.height = navbar.offsetHeight + navMenu.offsetHeight + "px";
//       isExpanded = true;
//   }
// };


let test = document.getElementById("nav-logo-and-hamburger-container").offsetHeight;
let hamburgerMenuContainer = document.getElementById("hamburger-container");
let navMenu = document.getElementById("nav-menu");
var expandedMenuValue = navMenu.offsetHeight + test + "px";
var collapsedMenuValue = navbar.offsetHeight - navMenu.offsetHeight + "px";

function toggleMenu(){
  if (isExpanded == true){
    navbar.style.height = expandedMenuValue;
    isExpanded = !isExpanded;
  }
  
  else if (isExpanded == false) {
    navbar.style.height = collapsedMenuValue;
    isExpanded = !isExpanded;
  }
}



toggleMenu();
hamburgerMenuContainer.addEventListener("click", toggleMenu);


let loyalList = document.getElementById("loyal-list");
let loyalContainer = document.getElementById("loyal-logo");

loyalContainer.onmouseenter = ()=> {
  const elementToAnimate = document.getElementById("loyal-button-cover");
  elementToAnimate.style.overflowX = "hidden";
  elementToAnimate.style.overflowY = "hidden";
  elementToAnimate.style.position = "absolute";
  elementToAnimate.style.bottom = "0px"
  elementToAnimate.style.height = "0%"
  loyalList.style.opacity = "100%"
}

loyalContainer.onmouseleave = ()=> {
  const elementToAnimate = document.getElementById("loyal-button-cover");
  elementToAnimate.style.overflowY = "visible";
  loyalList.style.opacity = "0%"
  elementToAnimate.style.height = "100%"
}





// Language Flag Toggle

function changeFlag(){
  var currentFlag = document.getElementById("language-flag");
  var currentFlagName = (currentFlag.getAttribute("src"));
  
  if (currentFlagName == "/images/englishFlag.jpg") {
    currentFlag.src = "/images/Flag-China.png";
    toggleMenuChinese(); // return chinese
    navbar.style.height = "auto";
  }
  
  if (currentFlagName == "/images/Flag-China.png") {
    currentFlag.src = "/images/englishFlag.jpg";
    toggleMenuEnglish(); // return english
    navbar.style.height = "auto";
  }
}

function toggleMenuChinese(){

// buttons
document.getElementById("button").innerHTML = "学到更多"

// navMenu links

document.getElementById("navhome").innerHTML = "主页"; // Home
document.getElementById("navabout").innerHTML = "关于我们"; // About
document.getElementById("navloyal").innerHTML = "Loyal"; // Loyal
document.getElementById("navservices").innerHTML = "提供的服务"; // Services
document.getElementById("navclients").innerHTML = "客户"; // Clients
document.getElementById("navcontact").innerHTML = "联系我们"; // Contact 


// Landing Section 

document.getElementById("1").innerHTML = "让我们开始工作吧"; // "Let's get to work"
document.getElementById("2").innerHTML = "我们在您业务的任何阶段为您提供建议, 咨询或指导"; // "First & Last Business Consulting, we provide advice, consultation, or guidance to you at any stage of your business"
document.getElementById("loyal-button-cover").innerHTML = "可特许经营"; // "Franchising Available"

// About Section

document.getElementById("translate-about").innerHTML = "关于我们"; // "About Us"
document.getElementById("translate-about-subheader").innerHTML = "我们在您业务的任何阶段为您提供建议、咨询或指导"; // "We advise, consult or guide you at any stage of your business"
document.getElementById("translate-about-p").innerHTML = "First & Last Business Consulting Inc. 是一家总部位于温哥华的小型企业咨询公司，成立于 1992 年，在特定领域提供专家建议和经验丰富的专业人员。我们对该主题有广泛的了解，主要通过分析现有组织问题和制定改进计划来帮助小型企业或个人提高绩效。";

// Loyal Section

document.getElementById("translate-loyal-subheader").innerHTML = "在下面查看我们激动人心的特许经营机会。"
document.getElementById("translate-loyal-p").innerHTML = "亚洲美食是世界上最受欢迎的食物之一，而来亚代表的是品质好、味道好！我们的客户欣赏我们快速、方便和友好的服务，我们仍然是行业的价值领导者。<br><br> 这是一个商业系统，无论您以前有咖啡馆经验还是商业知识，您都会成功。我们提供成功所需的工具包和支持，您所需要的只是热情！"
document.querySelector(".translate-loyal-button").innerHTML = "学到更多"

// Services Section 

document.querySelector(".translate-services-header").innerHTML = "提供的服务"; // "Services"
document.getElementById("translate-services-span").innerHTML = "我们从事该行业已有三十年，在快餐管理、多单元管理、休闲餐饮管理和所有权方面拥有丰富的经验。我们已经在不列颠哥伦比亚省的整个温哥华帮助开设了 30 多个单位。我们可以回答与餐饮业大部分领域相关的问题，包括";

document.getElementById("translate-services-1").innerHTML = "开餐馆、设计、物品定价"; // "Starting a restaurant, design, item pricing"
document.getElementById("translate-services-2").innerHTML = "站点/位置选择"; // "Site/location selection"
document.getElementById("translate-services-3").innerHTML = "人员配置和后勤"; // "Staffing/logistics"
document.getElementById("translate-services-4").innerHTML = "员工培训计划"; // "Training programs for employees"
document.getElementById("translate-services-5").innerHTML = "设备定价/管理"; // "Equiptment Pricing/Management"
document.getElementById("translate-services-6").innerHTML = "损失问题、销售培训、食谱"; // "Loss questions, sales training, recipes"
document.getElementById("translate-services-7").innerHTML = "以及该行业的许多其他领域..."; // "And many other areas of the industry..."

document.getElementById("translate-services-header-consulting").innerHTML = "咨询"; // "Consulting"
document.getElementById("translate-services-header-consulting-content").innerHTML = "我们提供的咨询服务是为满足您的投资目标而定制的，可以按单点方式或综合服务包的形式提供。这些服务多种多样。以下是我们酒店为满意的客户提供的服务示例。";

document.getElementById("translate-services-header-expertise").innerHTML = "专业知识"; // "Expertise"
document.getElementById("translate-services-header-expertise-content").innerHTML = "我们的信念是为酒店、汽车旅馆、餐厅、度假村或住宿设施的业主和投资者提供以解决方案为基础的服务，以增加和/或改善底线盈利能力。";

document.getElementById("translate-services-header-management").innerHTML = "管理"; // "Management"
document.getElementById("translate-services-header-management-content").innerHTML = "我们的服务不仅在运营范围内，而且我们还负责与客户合作，为他们的业务制定和实施长期战略，从而让您有时间进行其他和额外的业务/投资。";

document.querySelector(".translate-services-button").innerHTML = "学到更多" // "Learn More" button

// Clients Section

document.getElementById("translate-clients-header").innerHTML = "客户" // "Clients"
document.getElementById("translate-clients-subheader").innerHTML = "多年来我们的客户" // "Our clients over the years"
document.getElementById("translate-clients-content").innerHTML = "First & Last Business Consulting Inc. 最初是一个本地商业顾问团队，致力于帮助客户选择最适合其个人投资需求的服务，并在需要时提供商业战略方面的帮助。 这种个性化服务和对质量的承诺一直延续至今，并在 First & Last 商业咨询公司与其投资者之间建立了异常牢固的联系。 30 多年后的现在，我们继续为我们的客户提供服务和酒店业的创新解决方案，随着时间的不断变化，我们也是如此。"
document.querySelector(".translate-clients-button").innerHTML = "学到更多"; // "Learn More" button

// Footer Section

document.getElementById("translate-footer-email").innerHTML = "电子邮件" // "Email"

}


// -------------------------------------------------------------------------------------------------------


function toggleMenuEnglish(){
  // buttons
document.getElementById("button").innerHTML = "Learn More" 

// navMenu links

document.getElementById("navhome").innerHTML = "Home"; 
document.getElementById("navabout").innerHTML = "About"; 
document.getElementById("navloyal").innerHTML = "Loyal"; 
document.getElementById("navservices").innerHTML = "Services"; 
document.getElementById("navclients").innerHTML = "Clients"; 
document.getElementById("navcontact").innerHTML = "Contact"; 

// Landing Section 

document.getElementById("1").innerHTML = "Let's get to work";
document.getElementById("2").innerHTML = "First & Last Business Consulting</strong>, we provide <i>advice</i>, <i>consultation</i>, or <i>guidance</i> to you at any stage of your business";
document.getElementById("loyal-button-cover").innerHTML = "Franchising Available";

// About Section

document.getElementById("translate-about").innerHTML = "ABOUT US"; 
document.getElementById("translate-about-subheader").innerHTML = "We provide advice, consultation, or guidance to you at any stage of your business";
document.getElementById("translate-about-p").innerHTML = "First & Last Business Consulting Inc. is a Vancouver based consulting firm established in 1992 which provides expert advice from professionals. We have a lot of experience in helping small businesses and individuals improve their performance, primarily through analysis of organisational problems and developing solutions for improvement";

// Loyal Section

document.getElementById("translate-loyal-subheader").innerHTML = "See our exciting franchising opportunities below."
document.getElementById("translate-loyal-p").innerHTML = "Asian Food is one of the world’s favorite foods, and Loyal represents good quality products with great taste! Our customers appreciate our quick, convenient and friendly service and we remain a value leader in the industry. <br><br> It is a business system, developed so that whether you have previous café experience or business knowledge, you will succeed. We provide that toolkit and support needed for that success, all you need is the PASSION!"
document.querySelector(".translate-loyal-button").innerHTML = "Learn More"

// Services Section 

document.querySelector(".translate-services-header").innerHTML = "SERVICES";
document.getElementById("translate-services-span").innerHTML = "We have been in the industry for thirty years and have experience in fast food management, multi unit management, casual dining management and ownership. We have helped open over 30 units throughout all of Vancouver BC. We can answer questions relating to most areas of the restaurant industry including;"

document.getElementById("translate-services-1").innerHTML = "Starting a restaurant, design, item pricing";
document.getElementById("translate-services-2").innerHTML = "Site/location selection";
document.getElementById("translate-services-3").innerHTML = "Staffing/logistics"; 
document.getElementById("translate-services-4").innerHTML = "Training programs for employees"; 
document.getElementById("translate-services-5").innerHTML = "Equiptment Pricing/Management"; 
document.getElementById("translate-services-6").innerHTML = "Loss questions, sales training, recipes";
document.getElementById("translate-services-7").innerHTML = "And many other areas of the industry...";

document.getElementById("translate-services-header-consulting").innerHTML = "Consulting"; 
document.getElementById("translate-services-header-consulting-content").innerHTML = "The consulting services which we offer are customized to meet your investment objectives and may be structured either on a-la-carte basis or as a comprehensive package. These services are diverse and varied. The following is a sampling of services which our hospitality has offered to satisfied clients.";

document.getElementById("translate-services-header-expertise").innerHTML = "Expertise";
document.getElementById("translate-services-header-expertise-content").innerHTML = "Our belief is to provide owners and/or investors of hospitality oriented properties/facilities, be it a hotel, motel, restaurant, resort or lodging facility, with solution based services that increase and/or improve BOTTOM LINE PROFITABILITY.";

document.getElementById("translate-services-header-management").innerHTML = "Management"; 
document.getElementById("translate-services-header-management-content").innerHTML = "Our services are not only operational in scope, but we are also responsible for working with clients to develop and implement long term strategies for their businesses, thereby allowing yourself time for other and additional business/investment ventures.";

document.querySelector(".translate-services-button").innerHTML = "Learn More"

// Clients Section

document.getElementById("translate-clients-header").innerHTML = "CLIENTS";
document.getElementById("translate-clients-subheader").innerHTML = "First and Last Business Consulting's partners over the years.";
document.getElementById("translate-clients-content").innerHTML = "First & Last Business Consulting Inc. started as a team of local business consultants striving to help customers select services that best fit their personal investment needs and provide assistance with business strategies in times of need. This personalized service and commitment to quality continues today and has created an exceptionally strong bond between First &amp; Last Business Consulting firm and its investors. Now more than 30 years later, we continue to bring innovative solutions to the service and hospitality industry to our clients, as time continues to change, so do we."
document.querySelector(".translate-clients-button").innerHTML = "Learn More";

// Footer Section

document.getElementById("translate-footer-email").innerHTML = "Email Us.";


}
