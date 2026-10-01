/**
 * Burmese translations for the curriculum tree.
 *
 * The English copy stays in `src/data/curriculum.js` — this file is an overlay
 * that mirrors its shape. `src/i18n/config.js` registers both, so the data file
 * remains the single English source of truth and nothing is duplicated there.
 *
 * `npm run check:i18n` fails if a section or topic is missing from this file.
 *
 * Titles keep their English term and gain a Burmese gloss — "Object State များ"
 * rather than a bare translation — because the English word is what the reader
 * meets in the source and in every tutorial. Hook and API names (useState,
 * createContext, React.memo) are left alone entirely: they are identifiers.
 * Descriptions are translated outright, since nothing in them is code.
 */
export default {
  sections: {
    fundamentals: {
      title: 'React အခြေခံ',
      subtitle: 'React application များ၏ အခြေခံ ဆောက်လုပ်ပိုင်းများကို လေ့လာပါ။',
    },
    state: {
      title: 'State စီမံခန့်ခွဲခြင်း',
      subtitle: 'React သည် ပြောင်းလဲနေသော data ကို သိမ်းဆည်းပြီး ပြောင်းလဲပေးပုံကို လေ့လာပါ။',
    },
    effects: {
      title: 'Effects သက်ရောက်မှုများ',
      subtitle:
        'React သည် component များကို ပြင်ပ system များနှင့် အလိုအလျောက် တိုက်ရိုက်ချိတ်ဆက်ပုံကို လေ့လာပါ။',
    },
    refs: {
      title: 'References ကိုးကားမှုများ',
      subtitle:
        'ပြောင်းလဲနိုင်သော value များကို သိမ်းဆည်းပြီး DOM element များကို လက်ခောက်ခွင့်ရှိစေပုံကို လေ့လာပါ။',
    },
    performance: {
      title: 'Performance စွမ်းဆောင်ရည်',
      subtitle: 'React ၏ rendering နှင့် memoization အလုပ်လုပ်ပုံကို လေ့လာပါ။',
    },
    context: {
      title: 'Context အခြေခံ',
      subtitle:
        'props များကို လက်ဖြင့် မပေးဘဲ component များအကြား data များ မျှဝေပုံကို လေ့လာပါ။',
    },
    'custom-hooks': {
      title: 'Custom Hooks သီးသနှင့်',
      subtitle:
        'React logic များကို ဖြုတ်ယူလျက် ပြန်လည်အသုံးပြုနိုင်သော custom hook များအဖြစ် ပြုလုပ်ပုံကို လေ့လာပါ။',
    },
    forms: {
      title: 'Forms ပုံစံများ',
      subtitle: 'React သည် form input များကို ထိန်းချုပ်ပြီး စီမံပုံကို လေ့လာပါ။',
    },
    advanced: {
      title: 'Advanced Hooks အဆင့်မြင့်',
      subtitle: 'အဆင့်မြင့် React hooks များနှင့် rendering အလုပ်လုပ်ပုံများကို လေ့လာကြည့်ပါ။',
    },
    patterns: {
      title: 'React Patterns ပုံစံများ',
      subtitle:
        'ထိန်းသိမ်းရလွယ်သော React application များ ရေးသားနိုင်ရန် အသုံးပြုနေသော ပုံစံများကို လေ့လာပါ။',
    },
  },

  topics: {
    fundamentals: {
      components: {
        title: 'Component များ',
        description:
          'Component တစ်ခု အဘယ်လိုဖြစ်သနဲ့ component များ ဘယ်လို ပေါင်းစပ်သလဲဆိုတာ သိရှိရန်။',
      },
      jsx: {
        title: 'JSX',
        description: 'JSX ကို သုံးပြီး JavaScript expression များနှင့် markup ရေးသားပုံ။',
      },
      props: {
        title: 'Props',
        description: 'Parent component မှ data ကို child component များဆီ ပို့ပေးပုံ။',
      },
      children: {
        title: 'Children အတွင်းအင်္ဂါများ',
        description: 'children prop မှတဆင့် component တစ်ခုသို့ JSX ပို့ပေးပုံ။',
      },
      events: {
        title: 'Events ဖြစ်စဉ်များ',
        description: 'Click၊ input နှင့် အခြား DOM event များကို ကိုင်တွယ်ပုံ။',
      },
      'conditional-rendering': {
        title: 'Conditional Rendering အခြေအနေအလိုက်',
        description: 'အခြေအနေတစ်ခုအပေါ် မူတည်၍ UI ကို ကွဲလွဲစွာ ပြပုံ။',
      },
    },

    state: {
      'use-state': {
        title: 'useState',
        description: 'Component အဆင့် state ကို သိမ်းဆည်းပြီး ပြောင်းလဲပေးပုံ။',
      },
      'multiple-state': {
        title: 'Multiple State များစွာ',
        description:
          'Component တစ်ခုတွင် သီးခြားလွတ်လပ်သော state value အများအပြားကို စီမံပုံ။',
      },
      'object-state': {
        title: 'Object State များ',
        description: 'ဆက်စပ်နေသော value များကို state object တစ်ခုတွင်း အပြုံထဲ ထားရှိပုံ။',
      },
      'array-state': {
        title: 'Array State များ',
        description: 'State array ထဲမှ item များကို ထည့်သွင်း၊ ပြောင်းလဲပြီး ဖယ်ရှားပုံ။',
      },
      'functional-updates': {
        title: 'Functional Updates များ',
        description: 'ယခင် state value ကိုအမှီး ကာကွယ်စွာ ပြောင်းလဲပုံ။',
      },
    },

    effects: {
      'use-effect': {
        title: 'useEffect',
        description: 'Component render ပြီးနောက် side effect များ လုပ်ဆောင်ပုံ။',
      },
      'dependency-array': {
        title: 'Dependency Array များ',
        description: 'Dependency များကို သုံး၍ effect ပြန်လည်မည်လုပ်သလဲ ထိန်းချုပ်ပုံ။',
      },
      'no-dependency-array': {
        title: 'Dependency Array မပါခြင်း',
        description: 'Dependency array မပါသည့်အခါ ဘာဖြစ်သလဲ ကြည့်ရှုပုံ။',
      },
      cleanup: {
        title: 'Cleanup လုပ်ဆောင်ခြင်း',
        description: 'Effect ပြီးနောက် timer၊ listener နှင့် subscription များကို ဖျက်ဆီးပုံ။',
      },
      'fetching-data': {
        title: 'Fetching Data သို့ ဆက်သွယ်ခြင်း',
        description: 'Loading နှင့် error state များဖြင့် API မှ data ရယူပုံ။',
      },
    },

    refs: {
      'use-ref': {
        title: 'useRef',
        description:
          'Re-render မလုပ်ဘဲ render များအလိုက် ပြောင်းလဲနိုင်သော value ကို သိမ်းဆည်းပုံ။',
      },
      'dom-reference': {
        title: 'DOM Reference များ',
        description: 'Ref ကို DOM element အစစ်သို့ ညွှန်းပြီး focus လုပ်ပုံ။',
      },
      'use-ref-vs-use-state': {
        title: 'useRef vs useState',
        description: 'Ref သုံးသင့်အခါနှင့် state သုံးသင့်အခါကို နှိုင်းယှဉ်ချက်။',
      },
    },

    performance: {
      'react-memo': {
        title: 'React.memo',
        description: 'Props မပြောင်းလဲခဲ့သည့်အခါ child ကို re-render မလုပ်ဘဲ ကျော်သွားပုံ။',
      },
      'use-memo': {
        title: 'useMemo',
        description: 'ကုန်ကျစရိတ်မြင့်သော တွက်ချက်မှု၏ ရလဒ်ကို cache လုပ်ပုံ။',
      },
      'use-callback': {
        title: 'useCallback',
        description: 'Render များအကြား function reference ကို မပြောင်းလဲအောင် ထိန်းသိမ်းပုံ။',
      },
    },

    context: {
      'create-context': {
        title: 'createContext',
        description: 'Tree တစ်လျှောက်တွင် value များ မျှဝေရန် context object ဖန်တီးပုံ။',
      },
      provider: {
        title: 'Provider များ',
        description: 'Provider အောက်ရှိ component အားလုံးသို့ context value များ ပေးပို့ပုံ။',
      },
      'use-context': {
        title: 'useContext',
        description: 'Tree ထဲရှိ component မည်မဆိုမှ context value ဖတ်ရှုပုံ။',
      },
    },

    'custom-hooks': {
      'what-is-a-custom-hook': {
        title: 'Custom Hook ဆိုတာ ဘာလဲ',
        description: 'Logic ကို ဖြုတ်ယူပြီး ပြန်လည်အသုံးပြုခြင်း အတွေးကို နားလည်ပါ။',
      },
      'use-counter': {
        title: 'useCounter',
        description:
          'Increment နှင့် decrement ပါဝင်သော ပြန်လည်အသုံးပြုနိုင်သည့် counter hook တည်ဆောက်ပုံ။',
      },
      'use-toggle': {
        title: 'useToggle',
        description: 'Boolean value တစ်ခုကို ပြောင်းလဲပေးသော hook တည်ဆောက်ပုံ။',
      },
      'use-input': {
        title: 'useInput',
        description: 'ပြန်လည်အသုံးပြုနိုင်သော hook ဖြင့် input ကို state နှင့် ချိတ်ဆက်ပုံ။',
      },
      'use-local-storage': {
        title: 'useLocalStorage',
        description:
          'ပြန်လည်အသုံးပြုနိုင်သော hook ဖြင့် state ကို localStorage တွင် သိမ်းဆည်းထားရန်။',
      },
    },

    forms: {
      'controlled-input': {
        title: 'Controlled Input များ',
        description: 'Input ၏ value ကို React state မှ ရေးးသားပုံ။',
      },
      'form-submit': {
        title: 'Form Submit လုပ်ဆောင်ခြင်း',
        description: 'Form တင်ပို့မှုကို ကိုင်တွယ်ပြီး ဒီဇိုင်း page reload ကို တားဆီးပုံ။',
      },
      'multiple-inputs': {
        title: 'Multiple Inputs များ',
        description: 'State object တစ်ခုတည်းဖြင့် form တစ်ခုလုံးကို စီမံပုံ။',
      },
      validation: {
        title: 'Validation စစ်ဆေးခြင်း',
        description: 'Form field များကို စစ်ဆေးပြီး error message များ ပြပုံ။',
      },
    },

    advanced: {
      'use-reducer': {
        title: 'useReducer',
        description: 'Reducer ဖြင့် ရှုပ်ထွေးသော state ပြောင်းလဲမှုများကို ပုံဖော်ပုံ။',
      },
      'use-transition': {
        title: 'useTransition',
        description: 'State update တစ်ခုကို အရေးမကြီးသော အရေးအကြီးအဖြစ် သတ်မှတ်ပုံ။',
      },
      'use-deferred-value': {
        title: 'useDeferredValue',
        description:
          'Value တစ်ခု နောက်ရောက်လာနေစဉ် UI ကို တည်ကျောင်းရှိအောင် ထိန်းသိမ်းပုံ။',
      },
      'use-id': {
        title: 'useId',
        description: 'Accessibility attribute များအတွက် တည်မြဲသော unique id များ ထုတ်လုပ်ပုံ။',
      },
      'use-layout-effect': {
        title: 'useLayoutEffect',
        description: 'Browser က ရေးဆွဲခင်မ သို့ DOM ကို ဖတ်ပြီး ရေးသားပုံ။',
      },
      'use-imperative-handle': {
        title: 'useImperativeHandle',
        description: 'Child component မှ ကန့်အသတ်ရှိသော imperative API ကို ပေါ်ပေးပုံ။',
      },
      'use-sync-external-store': {
        title: 'useSyncExternalStore',
        description: 'React အပြင်ဘက်တွင် တည်ရှိသော store သို့ component ကို subscribe ပုံ။',
      },
    },

    patterns: {
      composition: {
        title: 'Component Composition ပေါင်းစပ်ခြင်း',
        description:
          'ပိုင်းအစိတ်အပိုးများ ပေါင်းစည်း၍ component များကို လက်တွေ့ကျစွာ လုပ်ဆောင်ပုံ။',
      },
      'prop-drilling': {
        title: 'Prop Drilling ကိုးကားမှု',
        description: 'အလွန်အကျော် လှမ်းထားသော props များကို သတိပြုပြီး ပြင်ဆင်ပုံ။',
      },
      'compound-components': {
        title: 'Compound Components များ',
        description: 'Parent နှင့် ဆက်စပ်သော child များအကြား state ကို မျှဝေပုံ။',
      },
      'container-presentational': {
        title: 'Container / Presentational ပုံစံ',
        description: 'Data ကိုင်တွယ်မှုကို ထင်းအတ်တဲ့ UI မှ ခွဲခြားပုံ။',
      },
      'render-props': {
        title: 'Render Props ပုံစံ',
        description: 'Rendering ကို စိတ်ကြိုက်လိုက်ရန် prop အဖြစ် function တစ်ခု ပို့ပေးပုံ။',
      },
      'higher-order-components': {
        title: 'Higher-Order Components များ',
        description: 'Component တစ်ခုကို လည်ပတ်အုပ်သည့်အတိုင်း behaviour အသစ်များ ထည့်သွင်းပုံ။',
      },
    },
  },
}
