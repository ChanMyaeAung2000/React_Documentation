/**
 * Burmese copy for the Section 1 demos.
 *
 * React identifiers — useState, setName, props, className — stay in English.
 * That is what the reader sees in their editor and in the console, so translating
 * them would break the correspondence between the demo and the code it teaches.
 * The prose around them is translated.
 */
export default {
  ComponentsDemo: {
    tree: {
      title: 'Component tree',
      subtitle: 'ComponentsDemo က ရေးမှတ်နေသည်များ',
      parent: 'parent',
      rendered: 'ပေါ်လာပါသည်',
      notRendered: 'မပေါ်လာပါ',
    },
    output: {
      title: 'အသက်ဝင်ရှိသော ရလဒ်',
      subtitle: 'တစ်ကြောင်းကို ဖွင့်/ပိတ်ပါ — parent က ဘာရေးမှတ်မည်ဆိုတာ ပြောင်းသွားပါမည်',
      hide: 'ဖျောက်ပါ',
      show: 'ပြပါ',
      composedBy: 'ဖွဲ့စည်းပေးသူ',
      empty:
        'Parent က ဘာမှ မရေးမထားပါ — component တွေက ရှိနေဆဲဖြစ်ပြီး tree ထဲမှာ မနေရာချထားတာသာ ဖြစ်ပါသည်။',
    },
    props: {
      title: 'Parent က ပေးလိုက်သော props',
      subtitle: 'ဤနေရာတွေကို ပြောင်းလဲပါ — UserCard က အလိုအလျောက် ပြောင်းသွားပါမည်',
      footer: 'Parent တွင် state ပြောင်းလဲပါက child များကို props အသစ်ဖြင့် ပြန်လည်ရေးဆွဲပါသည်။',
      name: 'name',
      role: 'role',
    },
  },

  JsxDemo: {
    react: 'React',
    nameLabel: 'အမည်',
    greeting: 'မင်္ဂလာပါ {{name}}',
    expression: {
      title: 'JSX အတွင်း JavaScript',
      subtitle: 'အမည်တစ်ခု ရိုက်ထည့်ပါ — {expression} ပြောင်းလဲနေသည်ကို ကြည့်ပါ',
      count: 'အခန်း ၁ တွင် ခေါင်းစဉ် {{count}} ခု',
    },
    attributes: {
      title: 'Attributes',
      subtitle: 'JSX tag ပေါ်တွင် ပေးထားသော props များ',
      dark: 'အမှောင်',
      light: 'အလင်း',
      demo: 'attribute demo',
      hint: 'နှိပ်ကြည့်ပါ — className expression က မည်သည့် class အစုအဝေးကို ရွေးပြီး ပေးနေသည်။',
    },
    oneLine: {
      title: 'JSX တစ်ကြောင်း',
      subtitle: 'ပြောင်းပြပါ — {condition && <Thing />}',
      toggle: 'အခြေအနေကို ပြောင်းလဲပါ',
      onlyWhenTrue: 'အခြေအနေက true ဖြစ်မှ သာ ပေါ်လာသော သူ',
    },
    really: {
      title: 'JSX က အမှန်တကယ် ဘာလဲ',
      subtitle: 'Tag တိုင်းက function တစ်ခုကို ခေါ်ခြင်း ဖြစ်ပါသည်',
      footer: 'Browser က JSX ကို မတွေ့ဖူးပါ။ Build step က ပို့ချပီးမည့်အမှန်မှာ ၎င်းကို ဤလိမ့် ပြောင်းလဲပေးပါသည်။',
      youWrite: 'သင် ရေးသည်မှာ',
      itBecomes: 'ပြောင်းလဲသွားသည်မှာ',
    },
  },

  PropsDemo: {
    stranger: 'မသိလူတစ်ယောက်',
    nameLabel: 'name  (ပေးထားသော prop ဖြစ်ပါသည်)',
    parent: {
      title: 'Parent',
      subtitle: 'State ကိုင်ဆည်းပြီး props အဖြစ် အောက်သို့ ပေးပို့ပါသည်',
      footer: 'Child က ပြသနေသည်အားလုံး ဤနေရာမှလာပါသည်။',
    },
    child: {
      badge: 'Child',
      greeting: 'မင်္ဂလာပါ {{name}}',
      tryWrite: 'ဤ prop ကို ပြောင်းလဲကြည့်ပါ',
      askParent: 'Parent မှ အမည်အသစ် တောင်းဆိုပါ',
    },
    childCard: {
      title: 'Child',
      subtitle: '{ name, role, onSuggestName } ကို လက်ခံရရှိပြီး ဖတ်ရှုပါသည်',
      footer: 'Prop အဖြစ် ပေးထားသော function ကို ခေါ်ရန် ခလုတ်ကို နှိပ်ပါ။',
    },
    flow: {
      title: 'Data က ဘယ်ဘက်ကနေ ရွှေ့ပါမလဲ။',
      subtitle: 'Props နှင့် အောက်သို့၊ callback နှင့် အပေါ်သို့',
      down: 'Parent → Child',
      downBody: 'child က ဖတ်နိုင်သော်လည်း ပြောင်းလဲနိုင်ခြင်း မရှိပါ။',
      up: 'Child → Parent',
      upBody: 'child က တောင်းဆိုပါသည်၊ parent က ဆုံးဖြတ်ပြီး မိမိ state ကိုပင် ပြောင်းလဲပါသည်။',
    },
  },

  ChildrenDemo: {
    examples: {
      element: {
        label: 'တစ်ခုတည်းသော element',
        node: 'မင်္ဂလာပါ React',
      },
      many: {
        label: 'Element အများအစု',
        button: 'နှိပ်ပါ',
      },
      text: {
        label: 'စာသားသီးသနှင့်',
        node: 'စာလုံးတို့ဖြင့်သာ ဖြစ်သည်',
      },
      expression: {
        label: 'Expression တစ်ခု',
        is: 'သည်',
      },
      nothing: {
        label: 'ဘာမှ မဟုတ်ပါ',
        node: 'children သည် undefined ဖြစ်နေသည်',
      },
    },
    kinds: {
      title: 'Component တစ်ခု၊ children အမျိုးအစား ငါးမျိုး',
      subtitle: 'Card က ဘယ်တော့မှ ပြောင်းလဲမည် မဟုတ်ပါ — အတွင်းကို သင် ဘာထည့်မလဲ ဆိုသည်သာ',
      result: 'ရလဒ်',
      youWrote: 'သင် ရေးခဲ့သည်မှာ',
    },
    own: {
      title: 'ကိုယ်တိုင် ရိုက်သားပါ',
      subtitle: 'စာလုံးသည် props.children အဖြစ် ပြောင်းသွားပါသည်',
      footer: 'Text input တစ်ခုချင်းဟာလည်း child တစ်ခု ဖြစ်ပါသည် — Card က အခြားအရာများနဲ့အတူ အတူတူ ရေးပေးပါသည်။',
      label: 'children အဖြစ် ပေးထားသော စာလုံး',
      placeholder: 'မိဘမှ လာသော မင်္ဂလာပါ',
    },
    why: {
      title: 'ဘာလို့ အရေးကြီးလဲ',
      subtitle: 'အကြောင်းအရာကို မသိဘဲ layout ကို component လုပ်နိုင်ခြင်း',
      without: 'children မလုပ်ချင်း',
      with: 'children ဖြင့်သုံးချင်း',
    },
  },

  ConditionalRenderingDemo: {
    iExist: 'ကျွန်ုပ် ရှိပါသည်',
    login: {
      name: 'အမည်',
      submit: 'ဝင်မန်းရန်',
    },
    dashboard: {
      welcome: '{{name}} ပြန်လည်ကြွယ်ပါပြီ',
      logout: 'ထွက်မည်',
    },
    classic: {
      title: 'ရိုးရှင်းဆုံး ဥပမာ',
      subtitle: '{isLoggedIn ? <Dashboard /> : <Login />}',
      footer: 'User မဝင်ရေးတည်းမှ သာ Login component ရှိနေပါသည်။',
      andNote: 'အောက်က ကြောင်းတွေက && ကို သုံးထားသည် — ထွက်သွားသည်နောက ပျောက်သွားပါမည်။',
    },
    three: {
      title: 'နည်းလမ်း သုံးမျိုး၊ ရလဒ်တစ်မျိုး',
      subtitle: 'ချွတ်ကို ပြောင်းပြီး နှိုင်းယှဉ်ပါ',
      footer: 'ဘယ်ဘက်က နည်းစနစ်ကို ရွေးပါ — ပြီးလျှင် ချွတ်ကို ပြောင်းပြီး ပြောင်းလဲမှုကို ကြည့်ပါ။',
      openPanel: 'Panel ကို ဖွင့်ပါ',
      closePanel: 'Panel ကို ပိတ်ပါ',
      result: 'ရလဒ်',
      source: 'Source',
    },
    techniques: {
      ternary: { note: 'အချင်းချင်း နှစ်မျိုးထဲမှ တစ်မျိုးကို ပေါ်စေလိုသည့်အခါ သုံးပါ။' },
      and: { note: 'တစ်ခုချင်းစလုံး မပေါ်စေလိုသည့်အခါ သုံးပါ။' },
      null: { note: 'Component တစ်ခုလုံး အလွတ်လုံး ဖြစ်သွားရမည့်အခါ component အတွင်းတွင် သုံးပါ။' },
    },
    gotcha: {
      title: '&& ကို သတိထားရန်',
      subtitle: '{count && <X />} ကို ဘာကြောင့် မရေးသင့်ပါသနည်း',
      footer: 'ဘေးကင်းရန် ternary သို့မဟုတ် boolean တစ်ခုချင်းကို သုံးပါ။',
      items: 'item {{count}} ခု',
      zeroRenders: 'count = 0 ဖြစ်ချိန်တွင် ဤကြောင်းသည် ဘာမှ မရေးပေမယ့်',
      insteadOfNothing: 'ကို အစား ရေးပေးပါသည်။',
      extraComparison: 'နောက်ထပ်ထည့်ထားသော နှိုင်းးနှီးကြောင့် 0 က falsy ဖြစ်သွားပြီး ဘာမှ မပေါ်လာပါ။',
    },
    readable: {
      title: 'ဖတ်ရလွယ်အောင် ထိန်းသိမ်းပါ',
      subtitle: 'Expression တစ်ခုလျှင် ternary တစ်ခုတည်း — အတွင်းချထားရိုးစုံဖြင့် သတိထားပါ',
      hard: 'ဖတ်ရခက်သည်',
      easier: 'ပို၍ လိုက်ရွားလွယ်သည်',
    },
  },

  EventsDemo: {
    inspector: {
      none: 'ယခုအထိ event မဖမ်းမိသေးပါ။',
      present: 'ရှိသည်',
      missing: 'မရှိပါ',
    },
    click: {
      subtitle: 'Spec ထဲက counter — ခလုတ်ကို နှိပ်ပါ',
      button: 'နှိပ်ပါ',
      countedBefore: 'နှိပ်ချက်:',
      countedAfter: 'ကြိမ်',
      reset: 'ပြန်လည်စတင်ပါ',
      handler: 'Handler',
      inspector: 'Event object',
      note: 'သတိပြုပါ',
      noteIs: 'သည်က',
      noteNot: 'ဖြစ်ပါသည်။ သင် နှိပ်ခဲ့သော',
      noteEnd: 'ကိုမဟုတ်ပါ — event များသည် နှိပ်ခဲ့သော element မှ အပေါ်ဘက်သို့ စီးကျနေပါသည်။',
    },
    change: {
      subtitle: 'စာလုံးတိုင်းနှိပ်တိုင်း အလုပ်လုပ်ပြီး event.target.value ကို ပေးပါသည်',
      label: 'တစ်ခုချင်း ရိုက်ပါ',
      inspector: 'Change event',
    },
    submit: {
      subtitle: 'preventDefault() က page ပြန်ဖတ်မှုကို တားပေးသည်',
      footer: 'preventDefault() ခေါ်ခြင်းကို ဖျက်လိုက်ပါက page ပြန်ဖတ်မည်ဖြစ်ပြီး အောက်ရှိ တန်ဖိုးအားလုံး ပျောက်သွားပါမည်။',
      label: 'Item တစ်ခု ထည့်ပါ',
      button: 'အတည်ပြုပါ',
      empty: 'မည်သူမျှ မအတည်ပြုရသေးပါ။',
    },
    args: {
      title: 'Argument များ ပေးပို့ခြင်း',
      subtitle: 'ခေါ်ခြင်းကို arrow function အတွင်း ထည့်ပါ',
      withArrow: "arrow ဖြင့် greet('Ada')",
      direct: 'handler ကို တိုက်ရိုက် ပေးပါ',
      hello: 'မင်္ဂလာပါ Ada',
      prompt: 'ပထမဆုံး ခလုတ်ကို နှိပ်ပါ။',
      noArrow:
        'arrow function မရှိသဖြင့် React က greet ကို event object နဲ့ ခေါ်သွားပါသည် — ဒါကြောင့် အမည်အစား object ကို မြင်ရပါသည်။',
    },
    bubble: {
      subtitle: 'ဘယ်ခလုတ်ကို နှိပ်လဲပြောင်းပါက handler ဘယ်တွေ လုပ်လဲမလဲ',
      footer:
        'Child ကို နှိပ်ချက်တစ်ခုသည် child ၏ handler ကို ဦးစွာ လုပ်ပြီးမှ အထက်က ancestor တစ်ခုချင်းစီတက် ဆက်လုပ်သွားပါသည်။',
      clear: 'Log ကို ရှင်းပါ',
      outer: 'အပေါ်အဆုံး',
      innerStopped: 'အတွင်း (ရပ်လိုက်ပြီး)',
      innerNotStopped: 'အတွင်း (မရပ်)',
      childStops: 'stopPropagation() ခေါ်သော child',
      childKeeps: 'မခေါ်သော child',
      log: 'log:',
      prompt: 'ဘယ်ဘက်ခလုတ်ကို နှိပ်ပြီး ကွာခွာချက်ကို ကြည့်ပါ။',
      explanation: 'တစ်ခုတည်းနှိပ်လိုက်ပါက ညာဘက်မှာ မှတ်တမ်း ၁ ခု၊ ဘယ်ဘက်မှာ ၂ ခု ရေးသွင်းပါမည်။',
    },
  },
}
