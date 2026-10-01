/**
 * Burmese (မြန်မာ) UI chrome.
 *
 * Technical identifiers — component names, hook names, `props`, `state`,
 * `key`, `render` — are deliberately left in English, which is what a Burmese
 * developer actually reads in documentation and in the console.
 */
export default {
  app: {
    name: 'React Learning Lab',
  },

  lang: {
    toggle: 'ဘာသာစကား',
    switchTo: '{{language}} သို့ ပြောင်းမည်',
  },

  header: {
    openNav: 'လမ်းညွှန်း ဖွင့်ရန်',
    searchLabel: 'ခေါင်းစဉ်များ ရှာဖွေရန်',
    searchPlaceholder: 'ခေါင်းစဉ်များ ရှာဖွေရန်…',
    noResults: '“{{query}}” နှင့်တူညီသော ခေါင်းစဉ် မရှိပါ။',
    themeToLight: 'အလင်းရောင် အပြင်သို့ ပြောင်းရန်',
    themeToDark: 'အမှောင်ရောင် အပြင်သို့ ပြောင်းရန်',
  },

  sidebar: {
    heading: 'သင်ကြားစာများ',
    navLabel: 'သင်ကြားစာများ',
    closeNav: 'လမ်းညွှန်း ပိတ်ရန်',
    counts: 'အခန်း {{sections}} ခန်း · ခေါင်းစဉ် {{topics}} ခေါင်းစဉ်',
  },

  home: {
    eyebrow: 'လက်တွေ့နေရာ',
    tagline:
      'ခေါင်းစဉ်တစ်ခုကို ဖတ်ပြီးနောက် အဲဒီအတိုင်း လက်တွေ့တွင် ကစားကြည့်ရှုပါ။ ခေါင်းစဉ်တိုင်းတွင် သီးသန့်သော demo component ရှိသဖြင့် click တစ်ခုလုပ်တိုင်း state၊ effect နှင့် render အကြောင်း ပြောင်းလဲမှုကို မြင်နိုင်ပါသည်။',
    startWith: '{{number}} {{title}} မှ စတင်မည်',
    curriculumHeading: 'သင်ကြားစာများ',
    moreInSidebar: 'sidebar ထဲတွင် နောက်ထပ် {{count}} ခု',
  },

  concept: {
    breadcrumbLabel: 'လမ်းညွှန်းမှု',
    navLabel: 'ခေါင်းစဉ် လမ်းညွှန်းမှု',
    home: 'ပင်မ',
    explanation: 'ရှင်းလင်းချက်',
    demo: 'လက်တွေ့ကစားနိုင်သော Demo',
    features: 'အသေးစိတ်',
    showCode: '{{file}} ကို ပြသရန်',
    howItWorks: 'အလုပ်လုပ်ပုံ',
    sourceCode: 'အရင်းအမြစ် ကုဒ်',
    keyPoints: 'အဓိက သိရှိချက်များ',
    previous: '← ယခင်ခေါင်းစဉ်',
    next: 'နောက်တစ်ခေါင်းစဉ် →',
    notFoundTitle: 'ခေါင်းစဉ် မတွေ့ရှိပါ',
    notFoundBody: '/{{section}}/{{topic}} တွင် ခေါင်းစဉ် မရှိပါ။',
    backHome: '← ပင်မစာမျက်နှာသို့ ပြန်ရန်',
  },

  demo: {
    loading: 'Demo ဖွင့်နေသည်…',
    placeholderBody:
      'ဤ demo ကို မသောင်းရေးရသေးပါ။ src/concepts/{{name}}.jsx ကို ဖန်တီးပြီးလျှင် src/concepts/registry.js တွင် မှတ်ပုံတင်ပါ။',
  },

  common: {
    copy: 'ကူးယူရန်',
    copied: 'ကူးယူပြီးပါပြီ',
  },

  levels: {
    Beginner: 'အခြေခံ',
    Intermediate: 'အလွတွေ့',
    Advanced: 'အဆင့်မြင့်',
  },
}
