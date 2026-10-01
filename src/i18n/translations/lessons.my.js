/**
 * Burmese translations for the lesson prose.
 *
 * Mirrors the shape of `src/data/lessons.js`, keyed "<sectionId>/<topicId>".
 * Only the translatable fields appear here — `explanation`, `features`,
 * `flow` and `keyPoints`. `sourceCode` is deliberately absent: code is code in
 * every language, and translating a snippet would teach the wrong thing.
 *
 * `features` is an object keyed by feature `id`, not an array. The array in
 * lessons.js fixes the order the page renders in; the ids are what the
 * translations hang off, so reordering or rewriting a feature cannot silently
 * attach Burmese prose to the wrong example file.
 *
 * `npm run check:i18n` fails if a lesson is missing, has a different number of
 * flow steps / key points than the English original, or drops a feature.
 */
export default {
  // ------------------------------------------------------------------ 1
  'fundamentals/components': {
    explanation:
      'Component တစ်ခု ဆိုတာ JSX ပြန်ပေးသော ပြန်လည်အသုံးပြုနိုင်သည့် function တစ်ခု ပါ။ ၎င်း၏အမည်က အကြီးစာလုံးဖြင့် စတင်ပြီး React က ပုံမှန် HTML tag နှင့် ခွဲခြားနိုင်အောင် ဖြစ်ပါသည်။ Component များက အခြား component များကို သုံးနိုင်သဖြင့် function ကြီးလေးတစ်ခု ရေးခြင်းအစား အပိုင်းအစိတ်ငယ်များကို ထပ်ဆောင်းပြီး UI ကို တည်ဆောက်ပါ။',
    features: {
      functional: {
        title: 'Functional Components များ',
        body: 'Functional Components ဆိုတာ Props တွေကို လက်ခံပြီး UI ပေါ်မှာ ပေါ်စေချင်တဲ့ JSX ကို Return ပြန်ပေးတဲ့ JavaScript Function များ ဖြစ်ကြပါတယ်။',
      },
      composition: {
        title: 'Component Composition ပေါင်းစပ်ခြင်း',
        body: 'Component Composition ဆိုတာ သေးငယ်ပြီး သီးခြားစီ အလုပ်လုပ်နိုင်တဲ့ Component လေးတွေကို ပေါင်းစပ်ပြီး ကြီးမားတဲ့ UI ဖွဲ့စည်းပုံကြီးတစ်ခုအဖြစ် တည်ဆောက်ခြင်း ဖြစ်ပါတယ်။',
      },
      'data-flow': {
        title: 'Data Flow — Parent မှ Child သို့နှင့် ပြန်လည်ယူခြင်း',
        body: 'React မှာ ဒေတာစီးဆင်းမှုဟာ Parent မှ Child သို့ Props မှတစ်ဆင့် တစ်ကြောင်းတည်း စီးဆင်းပါတယ် (One-way Data Flow)။ Child မှ Parent သို့ ဒေတာ သို့မဟုတ် အကြောင်းကြားချက် ပြန်လည်ပေးပို့ချင်ပါက Parent ၏ Callback Function ကို Child ထံ Props အဖြစ် ပို့ပေးပြီး Child ထဲမှ ခေါ်ယူပေးရပါတယ်။',
      },
      reusable: {
        title: 'Reusable Components များနှင့် Single Responsibility',
        body: 'Reusable Components ဆိုတာ Props များကို အသုံးပြုပြီး နေရာပေါင်းစုံတွင် ပုံစံအမျိုးမျိုးဖြင့် ပြန်လည်အသုံးပြုနိုင်အောင် ရေးသားထားသော UI များဖြစ်ကြပြီး၊ Single Responsibility စည်းမျဉ်းအရ Component တစ်ခုသည် တာဝန်တစ်ခုတည်းကိုသာ လုပ်ဆောင်သင့်ပါတယ်။',
      },
      'presentational-vs-container': {
        title: 'Presentational နှင့် Container Pattern',
        body: 'Presentational Components (UI Only) သည် ဒေတာများကို ပုံဖော်ပြသပေးရန်သာ တာဝန်ယူပြီး၊ Container Components (Logic & State) သည် ဒေတာ ရယူခြင်း၊ State ထိန်းချုပ်ခြင်း စသည့် Logic အပိုင်းများကိုသာ တာဝန်ယူပါတယ်။',
        note: 'ဤဥပမာတွင် ခေတ်ကာအ API call ကို အတုယူရန် setTimeout ကို သုံးထားပါသည်။ အမှန်တကယ် Effect တွင် timer သို့မဟုတ် subscription ဖန်တီးထားပါက cleanup function ပြန်လည်ပေးရပါသည် — အခန်း ၃ ရှိ Cleanup ခေါင်းစဉ်ကို ကြည့်ပါ။',
      },
    },
    flow: ['Parent Component', '<Header />', '<UserCard />', '<Footer />'],
    keyPoints: [
      'Component အမည်သည် အကြီးစာလုံးဖြင့် စတင်ရပါမည်',
      'Component တစ်ခုသည် JSX ကို ပြန်ရမည်ဖြစ်ပြီး <Component /> အဖြစ် အသုံးပြုပါသည်',
      'Component များကို အခြား component များအတွင်း ထည့်သွင်းနိုင်ပါသည်',
      'Component ဆိုတာ function တစ်ခုသာ ဖြစ်ပါသည် — class နှင့် inheritance မလိုအပ်ပါ',
    ],
  },

  'fundamentals/jsx': {
    explanation:
      'JSX ဆိုတာ JavaScript အတွင်း HTML ပုံစံ markup များ ရေးသားနိုင်သော ဖွဲ့စည်းပုံ ဖြစ်ပါသည်။ ကျဉ်းစွန်းလေးထဲရှိ အရာအားလုံးကို JavaScript expression အဖြစ် တွက်ချက်ပါသည်။ ထို့ကြောင့် variable၊ ဂဏန်းလုပ်ခြင်းနှင့် function ခေါ်ခြင်းတို့ကို markup အတွင်း တိုက်ရိုက်ထည့်နိုင်ပါသည်။ JSX က ရိုးရှင်းသော JavaScript အဖြစ် compile ဖြစ်သွားသဖြင့် browser က JSX ကို တိုက်ရိုက် parse လုပ်ခြင်း မရှိပါ။',
    features: {
      basic: {
        title: 'JSX Syntax နှင့် အတွင်း JavaScript',
        body: 'JSX ဆိုတာ JavaScript XML ရဲ့ အတိုကောက်ဖြစ်ပြီး JavaScript ဖိုင်ထဲမှာ HTML ပုံစံ Markup ရေးနိုင်အောင် လုပ်ပေးပါတယ်။ JSX ထဲမှာ JavaScript Variable သို့မဟုတ် တန်ဖိုးတွေကို သုံးချင်ရင် Curly Braces { } (ကွင်းကောက်) ထဲမှာ ထည့်ရေးရပါတယ်။',
      },
      expressions: {
        title: 'Expressions များ ရေးသားခြင်း',
        body: 'JSX ရဲ့ {} ကွင်းကောက်ထဲမှာ တန်ဖိုးတစ်ခု ပြန်ထွက်လာမည့် JavaScript Expression မှန်သမျှ (တွက်ချက်မှုများ၊ Function ခေါ်ယူမှုများ၊ String ဆက်ခြင်းများ) ကို ထည့်သွင်း ရေးသားနိုင်ပါတယ်။',
      },
      conditional: {
        title: 'Conditional Rendering အခြေအနေအလိုက် ပြသခြင်း',
        body: 'Condition (အခြေအနေ) ပေါ်မူတည်ပြီး UI ကို ပေါ်စေ/မပေါ်စေချင်တဲ့အခါ သုံးပါတယ်။ အဓိကအားဖြင့် Ternary Operator (? :) သို့မဟုတ် Logical AND (&&) ကို သုံးလေ့ရှိပါတယ်။',
      },
      lists: {
        title: 'Lists နှင့် .map()',
        body: 'Array ထဲမှာရှိတဲ့ ဒေတာတွေကို UI မှာ စာရင်းလိုက် ပြချင်တဲ့အခါ JavaScript ရဲ့ .map() Method ကို သုံးပြီး JSX Element တွေအဖြစ် ပြောင်းလဲဖော်ပြပေးရပါတယ်။',
        note: 'အစီအစဉ် မပြောင်းလဲဘဲ ထားရှိသော list များအတွက် key={index} သုံးခြင်း ကောင်းပါသည်။ သို့သော် item ထည့်ခြင်းနှင့် ဖျက်ခြင်း စတင်လိုက်တဲ့အခါ index က item ကို မသိက်နိုင်တော့ဘူး။ id ကို သုံးပါ — နောက်တစ်ခုတွင် လေ့လာပါ။',
      },
      keys: {
        title: 'key prop ပေးခြင်း',
        body: '.map() သုံးပြီး List ထုတ်တဲ့အခါ React က Element တစ်ခုချင်းစီကို ခွဲခြားမှတ်သားနိုင်ဖို့ key prop (မတူညီသော သီးသန့် ID) ထည့်ပေးရပါတယ်။ ဒါမှသာ List Item များကို ထည့်ခြင်း/ဖျက်ခြင်း ပြုလုပ်သည့်အခါ မလိုလားအပ်သော Re-render များကို ရှောင်ရှားနိုင်မည်ဖြစ်ပါတယ်။',
      },
      fragments: {
        title: 'Fragments ဖြင့် အုပ်စုဖွဲ့ခြင်း',
        body: 'React Component တစ်ခုသည် Parent Tag တစ်ခုထဲကိုသာ Return ပြန်ရပါသည် (Single Root Level)။ HTML DOM ထဲမှာ မလိုအပ်ဘဲ <div> Tag အပိုများ မရောက်သွားစေရန် Fragments (<> ... </>) ကို သုံးပြီး အုပ်စုဖွဲ့ပေးရပါတယ်။',
      },
      'jsx-vs-html': {
        title: 'JSX နှင့် HTML ကွာခြားချက်',
        body: 'JSX သည် ကြည့်ရတာ HTML နဲ့ တူသော်လည်း နောက်ကွယ်တွင် JavaScript အဖြစ်သို့ ပြောင်းလဲသွားသောကြောင့် Attributes နာမည်များ၊ Inline Style ရေးသားပုံနှင့် Tag အပိတ်အဖွင့် စည်းမျဉ်းများ ကွာခြားချက် ရှိပါတယ်။',
      },
    },
    flow: ['JavaScript expression', '{value}', 'တွက်ချက်ပြီး', 'စာသားအဖြစ် render ပါသည်'],
    keyPoints: [
      'ကျဉ်းစွန်းလေး { } ဖြင့် JSX အတွင်း JavaScript ကို တွက်ချက်ပါသည်',
      'Attribute များကို camelCase ဖြင့် ရေးသည် — ဥပမာ className နှင့် onClick',
      'JSX ကို parent element တစ်ခုတည်းဖြင့် (သို့မဟုတ် fragment <> </> ဖြင့်) လည်ပါးထိုးရပါမည်',
      '{condition && <Thing />} ဟု ရေးပြီး အခြေအနေအလိုက် render လုပ်နိုင်ပါသည်',
    ],
  },

  'fundamentals/props': {
    explanation:
      'Props ဆိုတာ component တစ်ခု ရရှိသော argument များ ဖြစ်ပါသည်။ Parent က မိမိ၏ HTML element တွင် attribute ထည့်သကဲ့သို့ ဖြင့် အောက်သို့ ပို့ပေးပြီး child က props object မှတဆင့်သို့မဟုတ် destructuring ဖြင့် ဖတ်ရှုပါသည်။ Props က read-only ဖြစ်ပါသည် — component တစ်ခုသည် prop ကို မည်သူမျှ မပြောင်းလဲနိုင်ပါ။ Callback မှတဆင့် parent ကို ပြောင်းလဲရန်သာ တောင်းဆိုနိုင်ပါသည်။',
    features: {
      destructuring: {
        title: 'Props ပို့ခြင်းနှင့် Destructuring',
        body: 'Props များကို မလိုအပ်ဘဲ props.name ဟု မရေးရအောင် Parameter အဆင့်မှာတင် Object Destructuring စတိုင်ဖြင့် တိုက်ရိုက် ခွဲထုတ်ယူသုံးစွဲနိုင်ပါတယ်။',
      },
      'defaults-validation': {
        title: 'Default Values နှင့် Props Validation',
        body: 'Props ပို့ပေးဖို့ မေ့သွားခဲ့ပါက Default Values များကို မူလတန်ဖိုးအဖြစ် သတ်မှတ်ပေးနိုင်ပြီး၊ prop-types ဖြင့် ပေးပို့လိုက်သော Data Type မှန်မမှန် စစ်ဆေးနိုင်ပါတယ်။',
        note: 'PropTypes သည် development အခါ data type မှန်ကန်စစ်ဆေးရန် ကောင်းစွာ လုပ်ပေးပါသေးသော်လည်း React အတွင်း ပါဝင်ခြင်း မရှိတော့ပါ။ ခေတ်မီ code များတွင် TypeScript types သို့မဟုတ် schema validator ကို သုံးကြခြင်း ပိုများပါတယ်။',
      },
      'functions-objects': {
        title: 'Functions၊ Objects နှင့် Arrays ကို Props အဖြစ် ပို့ခြင်း',
        body: 'Primitive Data များသာမက Object, Array နှင့် Function များကိုလည်း Props အဖြစ် ပေးပို့နိုင်ပါသည်။ Child ထဲမှ အဖြစ်အပျက်နှင့် Argument ဒေတာများကို Parent ထံ Function Prop ဖြင့် ပြန်လည် ပေးပို့နိုင်ပါသည်။',
      },
      'children-prop': {
        title: 'children prop',
        body: 'children prop ဆိုတာ React ရဲ့ Reserved Prop ဖြစ်ပြီး၊ Component Tag အဖွင့်/အပိတ် ကြားထဲတွင် ထည့်သွင်းလိုက်သော Nested Elements/JSX များကို ၎င်း Child Component အတွင်းသို့ ပေးပို့ရန် သုံးပါသည်။ Wrapper/Card/Modal များ ရေးသားရာတွင် အထူး သုံးလေ့ရှိပါတယ်။',
      },
    },
    flow: ['Parent', 'props: name="John"', 'Child', 'Hello John'],
    keyPoints: [
      'Props ကို HTML attribute အတိုင်း ပို့ပေးပါသည် — <Child name="John" />',
      'ဖတ်လွယ်အောင် function parameter တွင် props ကို destructure လုပ်ပါ',
      'Child component အတွင်း props ဆိုတာ read-only ဖြစ်ပါသည်',
      'Data သည် တစ်လမ်းတည်း စီးဆင်းပါသည် — props ဖြင့်လည်းကျွန်း၊ callback ဖြင့်လည်းကျွန်း',
    ],
  },

  'fundamentals/children': {
    explanation:
      'Component တစ်ခု၏ အဖွင့် tag နှင့် ပိတ်တဲ့ tag အကြားတွင် JSX ထည့်လိုက်သည့်အခါ React က အဲဒီကို အထူး props ဖြစ်သော children အဖြစ် လက်ခံရရှိပါသည်။ ဤကဒီတွင် card ကိုယ်ပိုင်အတိုင်း အတွင်းစက်မည်ကို မသိဘဲ content အမျိုးမျိုးကို လည်ပတ်နိုင်ပါသည်။ ပြန်လည်အသုံးပြုနိုင်သော layout များ ရေးသားနည်းဆုံးသည့်နည်းလမ်းတစ်ခု ဖြစ်ပါသည်။',
    flow: ['<Card>', 'children', 'Child component', 'အတွင်းတွင် children ကို render ပါသည်'],
    keyPoints: [
      'Tag အကြားထဲရှိ JSX သည် props.children အဖြစ် ရောက်ရှိပါသည်',
      'children သည် element တစ်ခု၊ element အများအပြား သို့မဟုတ် string တစ်ခု ဖြစ်နိုင်ပါသည်',
      'လည်ပတ်ထားသော content ပေါ်လာသင့်နေရာတွင် {children} ကို render ပါ',
      'ဤနည်းသည် layout component များနှင့် compound component များ၏ အခြေခံ ဖြစ်ပါသည်',
    ],
  },

  'fundamentals/events': {
    explanation:
      'React က onClick၊ onChange နှင့် onSubmit ကို props အဖြစ် သုံးပြီး event များကို ချိတ်ဆက်ပါသည်။ Handler သည် synthetic event object ကို လက်ခံရရှိပါသည်။ ဤ object သည် browser event ကို အတုယူပြီး browser အမျိုးမျိုးအလိုက် တူညီအောင် ပြုလုပ်ထားပါသည်။ Event များ အပေါ်သို့ စီးဆင်းပါသည် — child button တစ်ခုက parent က prop အဖြစ် ပေးထားသော handler ကို ခေါ်နိုင်ပါသည်။',
    flow: ['အသုံးပြုသူ click ပါသည်', 'onClick handler', 'setState(...)', 'Component ပြန်လည် render ပါသည်'],
    keyPoints: [
      'Handler များသည် onXxx အမည်ရှိ props များ ဖြစ်ပါသည် — onClick၊ onChange၊ onSubmit',
      'သောက်မှုတွင် preventDefault() နှင့် stopPropagation() ပါဝင်သော synthetic event object ကို လက်ခံရရှိပါသည်',
      'Handler သည် inline arrow function သို့မဟုတ် အမည်ရှိ function ဖြစ်နိုင်ပါသည်',
      'Argument ပေးရန် ခေါ်ခြင်းကို arrow function အတွင်း လည်ပါးထိုးပါ',
    ],
  },

  'fundamentals/conditional-rendering': {
    explanation:
      'Markup အတွင်း if/else အတွက် React တွင် အထူးဖွဲ့စည်းပုံ မရှိပါ။ ထို့ကြောင့် JSX အတွင်း ရိုးရှင်းသော JavaScript ကို သုံးပါသည်။ အသုံးအများဆုံး သုံးမျိုးမှာ — တစ်ခုရွေးရန် ternary operator၊ ပြသမည်သို့မဟုတ် မပြရန်ရန် && operator၊ ဘာမျှ render မလုပ်ရန် early return ဖြစ်ပါသည်။',
    flow: ['အခြေအနေ', 'ternary &&  ||  return null', 'အကျဉ်းဖြင့်ညီသော UI ကို render ပါသည်'],
    keyPoints: [
      'Ternary က element နှစ်ခုအကြား ရွေးပါသည် — cond ? <A /> : <B />',
      'အခြေအနေမှန်မဟုတ်ချိန် && က ဘာမျှ render မလုပ်ပါ',
      'ဘာမျှ render မလုပ်ရန် return null ကို သုံးပါ',
      'ပထမဆုံး ternary ကို ဖတ်ပါ — တစ်ခုပေါ်တစ်ခု ထပ်ထားလိုက်ပါက ဖတ်ရလွယ်ချက် ကွဲသွားပါမည်',
    ],
  },

  // ------------------------------------------------------------------ 2
  'state/use-state': {
    explanation:
      'useState က component တစ်ခုသို့ မိမိ၏သီးသန့်မှတ်တိုင်း ပေးပါသည်။ လက်ရှိ value နှင့် setter function ကို ပြန်ပေးပြီး setter ကို ခေါ်ဆိုချိန်က React အား value အသစ်ဖြင့် ပြန်လည် render ပေးရန် တောင်းပါသည်။ State သည် snapshot တစ်ခု ဖြစ်သဖြင့် handler တစ်ခုတည်းတွင် ခေါ်ဆိုပါက handler နှစ်ခုစလုံးသည် လက်ရှိ render ၏ value ကိုပင် တွေ့မြင်ပါမည်။',
    flow: ['အသုံးပြုသူ ရိုက်ထည့်သည်', 'onChange', 'setName(value)', 'State ပြောင်းလဲပါသည်', 'ပြန်လည် render ပါသည်'],
    keyPoints: [
      'const [value, setValue] = useState(initialValue)',
      'Setter ကို ခေါ်ဆိုချိန် value အသစ်ဖြင့် ပြန်လည် render ဖြစ်ပါသည်',
      'State က ကိုယ်တိုင် declare လုပ်ထားသော component အတွက်သာ သီးသန့်ပါသည်',
      'State သည် snapshot ဖြစ်သည် — handler တစ်ခုတွင် နှစ်ကြိမ်ဖတ်ပါက value တူညီနေမည်',
    ],
  },

  'state/multiple-state': {
    explanation:
      'Component တစ်ခုက useState ကို အကြိမ်မကြိမ် ခေါ်ခွင့်ရှိပါသည်။ ခေါ်ခြင်းတိုင်းသည် ကိုယ်ပိုင် value နှင့် setter ရှိသော လွတ်လပ်သည့် slot တစ်ခု ဖြစ်ပြီး React က update များကို အုပ်စည်းကာ event တစ်ခုတွင် setter မည်မျှခေါ်ဆိုသည်ဖြစ်စေ တစ်ချက်တည်း ပြန်လည် render လုပ်ပါသည်။',
    flow: ['useState("")', 'useState(0)', 'လွတ်လပ်သော value များ', 'တစ်ကြိမ်တည်း ပြန်လည် render ပါသည်'],
    keyPoints: [
      'လွတ်လပ်သော value တစ်ခုကို useState တစ်ခုဖြင့် သိမ်းပါ',
      'Hook ခေါ်ခြင်းတိုင်းသည် ကိုယ်ပိုင် နေရာကို ထိန်းသိမ်းထားသဖြင့် အစဉ်ကို လုံးဝမပြောင်းရ',
      'Event တစ်ခုတွင် state အများအပြားကို ပြောင်းလဲပေးသည့််လည်း ပြန်လည် render တစ်ချက်တည်းသာ ဖြစ်ပါသည်',
      'အချင်းချင်း ပြောင်းလဲလေ့ဏ ပါသော value များကို object state တစ်ခုတည်းထဲ အပြုံထားပါ',
    ],
  },

  'state/object-state': {
    explanation:
      'Field အများအပြား အချိတ်အဆက်ရှိသည့်အခါ — user၊ form သို့မဟုတ် product ဖြစ်ပါက — state သုံးခုထက် object တစ်ခုက ပိုမိုရှင်းလင်းပါသည်။ State ကို merge မလုပ်ဘဲ အစားထိုးပါသောကြောင့် update တိုင်းသည် ယခင် object ကို spread လုပ်ပြီး ပြောင်းလဲသွားသော key များကိုသာ ကိုယ်ပြင်ရပါသည်။',
    flow: ['setUser(prev => ({ ...prev, age: prev.age + 1 }))', 'Object အသစ်', 'ပြန်လည် render ပါသည်'],
    keyPoints: [
      'State ကို merge မလုပ်ဘဲ အစားထိုးပါသည် — ယခင် object ကို အနေချက်တွင် spread လုပ်ပါ',
      'နောက်တစ် value က ယခင် value အပေါ် မူတည်ပါက functional update ကို သုံးပါ',
      'Object များကို immutable အဖြစ်ထားပါ — mutate မလုပ်ဘဲ object အသစ် ဖန်တီးပါ',
      'ဆက်စပ်သော field များကို object တစ်ခုတည်းထဲ ထားခြင်းက update များကို atomic ဖြစ်စေပါသည်',
    ],
  },

  'state/array-state': {
    explanation:
      '"အစားထိုးရန်၊ mutate မလုပ်ရ" ဆိုသည့် စည်းမျဉ်းက အန္တရာယ်များဆုံး ဖြစ်ခြင်းက array များတွင် ဖြစ်ပါသည်။ ထည့်ရန်ဆိုတာ spread နှင့် concat ပုံစံ၊ ဖယ်ရှားရန်ဆိုတာ filter၊ ပြောင်းလဲရန်ဆိုတာ map ဖြင့် list ထဲတစ်ခုချင်းကို အစားထိုးခြင်း ဖြစ်ပါသည်။ Array reference သည် အမြဲအသစ်ဖြစ်ရပါမည် သို့မဟုတ် React က ပြောင်းလဲမှုကို မမြင်နိုင်ပါ။',
    flow: ['setItems(prev => [...prev, newItem])', 'Array အသစ်', 'ပြန်လည် render ပါသည်'],
    keyPoints: [
      '[...prev, item] ဖြင့် ထည့်ပြီး filter ဖြင့် ဖယ်ရှားပါ',
      'map ဖြင့် ပြောင်းလဲကာ array အသစ် ရယူပါ',
      'State ပေါ်တွင် push၊ splice၊ sort ကို တိုက်ရိုက် မသုံးပါ',
      'key အဖြစ် array index အစား entry id ကို သုံးပါ',
    ],
  },

  'state/functional-updates': {
    explanation:
      'နောက်တစ် state က ယခင် state အပေါ် မူတည်နေသည့်အခါ value အစား function တစ်ခု ပေးပါ။ React က updater function များကို queue ထဲတွင် သိမ်းဆည်းပြီး အစဉ်လိုက် အသုံးပြုပါသည်။ ထို့ကြောင့် click တစ်ခုတည်းတွင် increment နှစ်ကြိမ် လုပ်လိုက်လျှင် နှစ်ခုစလုံး ရေမှတ်ပါသည်။ ပေးထားသော value နှင့်ဆိုလျှင် ဒုတိယက ပထမဆုံးကို ဖုံးလိမ့်ပါမည်။',
    flow: ['setCount(prev => prev + 1)', 'React က updater ကို queue ထဲ သိမ်းဆည်းပါသည်', 'နောက်ဆုံး state အပေါ် အသုံးပြုပါသည်', 'ပြန်လည် render ပါသည်'],
    keyPoints: [
      'လက်ရှိ state အပေါ် မူတည်မှု မရှိသောအခါသာ value ပေးပါ',
      'Updater သည် ဤ render ၏ value မဟုတ်ဘဲ နောက်ဆုံး state ကို လက်ခံရရှိပါသည်',
      'React က update များကို batch လုပ်ပြီး updater များကို အစဉ်လိုက် အသုံးပြုပါသည်',
      'Async callback များနှင့် effect များအတွင်း functional update ကို သုံးပါ',
    ],
  },

  // ------------------------------------------------------------------ 3
  'effects/use-effect': {
    explanation:
      'useEffect က React က DOM ကို ရေးဆွဲပြီးနောက် side effect ကို လုပ်ဆောင်ပါသည်။ ဤနည်းသည် React အပြင်ဘက်ရှိ အရာများနှင့် တိုက်ရိုက်ချိတ်ဆက်ရန် ဖြစ်ပါသည် — timer၊ subscription၊ browser API၊ network request တို့။ Value များကို တွက်ချက်ရန်မဟုတ်ပါ — ထိုအတွက် useMemo သည် သင့်တော်ပါသည်။',
    flow: ['Render', 'DOM ကို commit', 'Effect လုပ်ဆောင်', 'Unmount ဖြစ်ရာတွင် cleanup လုပ်ဆောင်'],
    keyPoints: [
      'Effect များက ရေးဆွဲမှုကို DOM အဖြစ် commit ပြီးနောက် လုပ်ဆောင်ပါသည်',
      'Dependency array က effect ပြန်လည်လုပ်ရမည့် အကြိမ်အကြောင်းကို ထိန်းချုပ်ပါသည်',
      'Effect တစ်ခုသည် cleanup function တစ်ခု သို့မဟုတ် ဘာမျှမပြန်ပါ',
      'ပြောင်းလဲမှုရှိသော dependency မရှိဘဲ effect အတွင်း state ကို မသတ်မှတ်ပါ',
    ],
  },

  'effects/dependency-array': {
    explanation:
      'Dependency array သည် effect နှင့် ပြင်ပလောက်ကြီးတွင် ရှိသည့် စည်းချက် ဖြစ်ပါသည်။ React က ယခင် array ကို သိမ်းထားပြီး လက်ရှိ array နှင့် နှိုင်းယှဉ်ပြီး value တစ်ခုချင်းပြောင်းလဲနေပါက effect ကို ပြန်လည်လုပ်ဆောင်ပါသည်။ Effect က ဖတ်သော reactive value အားလုံးကို စာရင်းထဲ ထည့်ရပါမည် မဟုတ်ပါက effect သည် နောက်ကျက်နေသော value ကို သုံးပါမည်။',
    flow: ['count ပြောင်းလဲ', 'Render အသစ်', 'Deps များ ကွဲနေသည်', 'Effect ပြန်လည်လုပ်ဆောင်'],
    keyPoints: [
      '[] ဆိုတာ mount ဖြစ်စောက် တစ်ခါတလျှင် လုပ်ရန် ဆိုခြင်း ဖြစ်ပါသည်',
      '[value] ဆိုတာ ထို value ပြောင်းလဲသည့်အခါ လုပ်ရန် ဆိုခြင်း ဖြစ်ပါသည်',
      'Array မပါက render တိုင်းအနောက် လုပ်ရန် ဆိုခြင်း ဖြစ်ပါသည်',
      'Dependency မလုံလောက်ခြင်းကို linter က သတိပြီးပါသည် — အသိအမှန်ဖြစ်သည့် အကြောင်းရင်းကို ပြင်ပါ၊ warning ကို ဖိန့်ပစ်ခြင်း မလုပ်ပါ',
    ],
  },

  'effects/no-dependency-array': {
    explanation:
      'Dependency array ကို မထည့်ပါက effect က render တိုင်းအနောက်တွင် လုပ်ဆောင်ပါမည် — ကိုယ်တိုင်၏ state update ကြောင့် ဖြစ်သော render များအပေါ်တွင်ပါ ပါလေးပါသည်။ Log ရေးရန်အတွက် အဆင်ပြီး state ရေးမှုများအတွက်မူ အန္တရာယ်များများ ရှိပါသည် — တစ်ချက်လုပ်လိုက်တိုင်း render တစ်ခုကို ချိန်ရက်ပြီး နောက်တစ်ချက်က နောက်ထပ်တစ်ခုကို ချိန်ရက်ပါသည်။',
    flow: ['Render', 'Effect လုပ်ဆောင်', 'Effect က state ပြောင်းလဲ', 'ပြန်လည် render', '...'],
    keyPoints: [
      'Array မပါက effect က render တစ်ခုချင်းစီ၏ အနောက်တွင် လုပ်ဆောင်ပါမည်',
      'Logging နှင့် render အလုပ်လုပ်ပုံကို debug လုပ်ရန် အလွန်အကောင်းပါသည်',
      'ထိုကဲ့သို့ effect အတွင်း state ပြောင်းလဲပါက အနေအဓိပ္ပတိတ် loop ဖြစ်ပါသည်',
      'Loop ကို ရပ်ရန် dependency array ထည့်ပါ',
    ],
  },

  'effects/cleanup': {
    explanation:
      'Effect မှ ပြန်ပေးသော function က ထို effect ၏ cleanup ဖြစ်ပါသည်။ React က အဲဒီကို effect ပြန်လည်လုပ်မည့်မတိုင်မီနှင့် component ကို unmount လုပ်ချိန်တွင် ထပ်မံလုပ်ဆောင်ပါသည်။ ဤကဒီတွင် timer ပယ်ဖျက်ခြင်း၊ listener ဖယ်ရှားခြင်းနှင့် request ရပ်ပါသည်။ Cleanup မရှိပါက ပြန်လည်လုပ်ဆောင်ချိန်တိုင်း subscription တစ်ခုစီ အပေါ်တွင် တစ်ခုစီ ထပ်ပေါင်းမှု ဖြစ်လာပါမည်။',
    flow: ['Effect လုပ်ဆောင်', 'ပြန်လည် render သို့မဟုတ် unmount', 'Cleanup လုပ်ဆောင်', 'Effect ပြန်လည်လုပ်ဆောင်'],
    keyPoints: [
      'Cleanup ကို သတ်မှတ်ရန် effect မှ function တစ်ခု ပြန်ပေးပါ',
      'Cleanup က နောက်တစ်ချက်မလုပ်မီနှင့် unmount ဖြစ်ချိန်တွင် လုပ်ဆောင်ပါသည်',
      'Timer၊ listener နှင့် subscription များကို အမြဲရှင်းလင်းပါ',
      'StrictMode တွင် effect များ လုပ်ဆောင်၊ ရှင်းလင်း၊ ပြန်လည်လုပ်ဆောင်ကြပါသည် — cleanup သည် idempotent ဖြစ်ရပါမည်',
    ],
  },

  'effects/fetching-data': {
    explanation:
      'Effect အတွင်း data ရယူခြင်းသည် အခြေအနေ သုံးမျိုးနှင့် လုပ်ပါသည် — loading၊ success၊ error။ Request တစ်ခုက သည်ဖြင့် component ပျောက်သွားပြီးနောက် သို့မဟုတ် data အသစ်ရောက်လာပြီးနောက် ပြန်ရနိုင်ပါသည်။ ထို့ကြောင့် ignore flag သို့မဟုတ် AbortController ဖြင့် ကာကွယ်ရပါသည် — အလိုမရှိသော component တွင် state မပြောင်းရန်နှင့် အသစ်ရလဒ်များကို မဖုံးအုပ်ရန်။',
    flow: ['Loading', 'API request', 'အောင်မြင်ခြင်း (Success)', 'သို့မဟုတ် အမှား (Error)'],
    keyPoints: [
      'Data နှင့်အတူ loading နှင့် error state များကိုလည်း မှတ်တိုင်းပါ',
      'နောက်ကျက်သော response များကို ကာကွယ်ရန် cleanup တွင် request ကို ပယ်ဖျက်ပါ',
      'Request ပြန်လည်ပို့မည့်အခါကို dependency array က ဆုံးဖြတ်ပါသည်',
      'ဖတ်ရန်သာ data အတွက် framework သို့မဟုတ် data library တစ်ခုကို စဉ်းစားပါ',
    ],
  },

  // ------------------------------------------------------------------ 4
  'refs/use-ref': {
    explanation:
      'useRef က render တိုင်းတလှမှတ်လှ ကျန်ရှိနေသော ပြောင်းလဲနိုင်သည့် container တစ်ခု ပေးပါသည်။ ၎င်းကို mutate လုပ်ခြင်းက component ကို ပြန်လည် render မလုပ်ပါ။ ထို့ကြောင့် React က ပြသရန် မလိုအပ်သော value များ — timer၊ ယခင် value၊ counter နှင့် DOM node များ — အတွက် အထူးသင့်လျှင် ဖြစ်ပါသည်။',
    flow: ['useRef(initial)', '.current ကို mutate လုပ်', 'Value ကျန်ရှိ', 'ပြန်လည် render မဖြစ်'],
    keyPoints: [
      'const ref = useRef(initialValue)',
      'ref.current ကို အလွတ်လျက် ဖတ်ရေးနှင့် ရေးသားနိုင်ပါသည် — ၎င်းက ပြောင်းလဲနိုင်ပါသည်',
      '.current ကို ပြောင်းလဲခြင်းက ပြန်လည် render ကို ဘယ်တော့မှ မဖွင့်စေပါ',
      'UI တွင် ပြသရန်လိုသော value ဆိုပါက ref အစား state ကို သုံးပါ',
    ],
  },

  'refs/dom-reference': {
    explanation:
      'JSX element တစ်ခုသို့ ref object တစ်ခုကို prop အဖြစ် ပေးလိုက်သည့်အခါ React က အမှန်တကယ်သော DOM node ကို ref.current အဖြစ် ချိတ်ဆက်ပေးပါသည်။ ဤကဒီတွင် focus()၊ scrollIntoView() ကိုသို့မဟုတ် element ၏ အရွယ်အစားကို တိုင်းတာမှုကိုသို့မဟုတ် browser method များကို ခေါ်နိုင်ပါသည် — state တစ်ခုတည်းဖြင့် မလုပ်နိုင်သောအရာများ ဖြစ်ပါသည်။',
    flow: ['<input ref={inputRef} />', 'Mount ဖြစ်', 'inputRef.current = DOM node', '.focus() ကို ခေါ်'],
    keyPoints: [
      'ref.current သည် ပထမဆုံး render တွင် null ဖြစ်ပြီး mount ပြီးနောက် node ဖြစ်ပါသည်',
      'DOM node များကို render အခါတွင်မဟုတ်ဘဲ effect သို့မဟုတ် event handler အတွင်း လက်ခောက်ပါ',
      'JSX factory တစ်ခုက တစ်ခုကိုပြန်ပေးလျက် ref ကို forward လုပ်ပေးခြင်းကို useImperativeHandle ဟု ခေါ်ပါသည်',
      'အသုံးပြုသူက မြင်ရမည့်အရာများအတွက် state ကို သုံးပါ',
    ],
  },

  'refs/use-ref-vs-use-state': {
    explanation:
      'နှစ်ခုစလုံးသည် render များအကြား ကျန်ရှိနေကြပ်သော်လည်း state သာ မှ component ကို ပြန်လည် render လုပ်ပါသည်။ စည်းဥပဒေမှာ ရိုးရှင်းပါသည် — value က ရေးဆွဲထားသောအရာကို ထိခိုက်ပါက state သုံးပါ။ ၎င်းက handle၊ timer id သို့မဟုတ် effect က နောက်မှသာ ဖတ်သော value ဆိုပါက ref သုံးပါ — ထိုအတွက် ပြန်လည် render လုပ်ခြင်းသည် အလုံးဝ ပိုနက်နဲသော အလုပ်ပါ။',
    flow: [
      'useState: value ပြောင်း → ပြန်လည် render',
      'useRef: .current ပြောင်း → ပြန်လည် render မဖြစ်',
    ],
    keyPoints: [
      'State က UI က မဖြစ်မနေပါက ပြသရမည့် value များအတွက် ဖြစ်ပါသည်',
      'Ref က UI က လုံးဝ မပြသဘဲ ပြောင်းလဲနိုင်သော value များအတွက် ဖြစ်ပါသည်',
      'Ref က effect သို့မဟုတ် timer အား အသစ်ကို ပြန်လည် subscribe မလုပ်ဘဲ နောက်ဆုံး value ကို ဖတ်စေပါသည်',
      'Render အခါ ref ကို မရေးပါ — effect သို့မဟုတ် handler တွင်း ပြောင်းလဲပါ',
    ],
  },

  // ------------------------------------------------------------------ 5
  'performance/react-memo': {
    explanation:
      'React.memo က component တစ်ခုကို လည်ပတ်ပေးပြီး props များသည် ယခင် render နှင့် အနိုင်ရှိပေမယ့် (shallowly equal) ဆိုပါက React က ပြန်လည် render မလုပ်ဘဲ ကျော်သွားနိုင်ပါသည်။ သို့သော် prop အားလုံး တည်မြဲမှုရှိရပါမည် မဟုတ်ပါက အလုပ်မလုပ်ပါ။ Inline object၊ array သို့မဟုတ် function သည် render တိုင်းအတွက် reference အသစ် ဖြစ်သဖြင့် memo ကို လုံးဝ ပျက်စေပါသည်။',
    flow: [
      'Parent ပြန်လည် render ပါသည်',
      'React.memo နှင့် props များကို နှိုင်းယှဉ်',
      'တူညီပါက → child render ကို ကျော်',
    ],
    keyPoints: [
      'memo() က props များကို Object.is ဖြင့် နှိုင်းယှဉ်ပါသည်',
      'Function၊ object သို့မဟုတ် array prop အသစ်က နှိုင်းယှဉ်မှုကို ပျက်စေပါသည်',
      'memo က ကုန်ကျသော child များတွင်သာ အသုံးဝင်ပါသည် — ဦးစွာ တိုင်းတာပါ',
      'Props များကို တည်မြဲအောင် useCallback နှင့် useMemo နှင့် ပေါင်းစပ်ပါ',
    ],
  },

  'performance/use-memo': {
    explanation:
      'useMemo က render များအကြား တွက်ချက်မှုတစ်ခု၏ ရလဒ်ကို cache လုပ်ပါသည်။ Dependency များ မပြောင်းလဲပါက React က cache ထဲမှ value ကို ပြန်ပေးပြီး တွက်ချက်မှုကို လုံးဝ မလုပ်ပါ။ အမှန်တကယ် ကုန်ကျသော အလုပ်များ သို့မဟုတ် identity တည်မြဲရမည့် value များအတွက်သာ သုံးပါ — မူလိုနေသကဲ့သို့ မသုံးပါနှင့်။',
    flow: [
      'Dependency ပြောင်းလဲ',
      'useMemo က ပြန်လည်တွက်ချက်',
      'မဟုတ်ပါက cache ပြန်ပေး',
    ],
    keyPoints: [
      'const value = useMemo(() => compute(), [deps])',
      'Dependency တစ်ခုချင်း ပြောင်းလဲမှသောအခါသာ တွက်ချက်မှု ပြန်လုပ်ပါသည်',
      'မဆက်စပ်သော state ပြောင်းလဲပါက cache ထားသော ရလဒ် ဆက်ရှိပါသည်',
      'Memoization က ကုန်ကျပါသည် — ကုန်ကျသော အလုပ်များကိုသာ လည်ပတ်ပါ',
    ],
  },

  'performance/use-callback': {
    explanation:
      'useCallback ဆိုတာ function များအတွက် useMemo ဖြစ်ပါသည်။ Dependency မပြောင်းလဲမီ function reference တူညီကို ပြန်ပေးပါသည် — ထိုကြောင့် ထို function က render တိုင်းအတွက် prop အသစ် ဖြစ်မနေတော့ပါ။ child တွင် React.memo ကို အများဆုံး ပျက်စေသည့်အရာမှာ ဤသည်ပင် ဖြစ်ပါသည်။',
    flow: [
      'Deps ပြောင်းလဲ',
      'Function reference အသစ်',
      'Deps တူညီပါက → reference တူညီ',
    ],
    keyPoints: [
      'const fn = useCallback(() => {}, [deps])',
      'Render များအကြား function reference ကို တည်မြဲအောင် ထိန်းသိမ်းပါသည်',
      'Props များ တည်မြဲလာသဖြင့် React.memo က အမှန်တကယ် render ကို ကျော်နိုင်ပါသည်',
      'Callback အတွင်း အသုံးပြုသော state ကို dependency အဖြစ် ထည့်ပါ',
    ],
  },

  // ------------------------------------------------------------------ 6
  'context/create-context': {
    explanation:
      'createContext က default value တစ်ခု ပါဝင်သော context object တစ်ခု ပေးပါသည်။ မသူတစ်ယောက်မျှ မသောက်သေးပါ — ထို object သည် tree ထဲမှာ မြင့်မြင့်ရှိသော provider တစ်ခုနှင့် အောက်မှာ နေရာမှ consumer တစ်ခုက တူညီသော value တစ်ခုကို သဘောတူညီစေသည့် နည်းလမ်းသာ ဖြစ်ပါသည်။ Provider မရှိပါက consumer များက default value ကို သုံးကြပါမည်။',
    flow: ['createContext(defaultValue)', 'Context object', 'Provider က value ပြောင်း', 'Consumer က value ဖတ်'],
    keyPoints: [
      'createContext(defaultValue) က context object တစ်ခု ပေးပါသည်',
      'Context ကို တစ်ခါတလျှင်သာ သတ်မှတ်ပြီး ပုံမှန်ဆိုလျှင် သီးသန့် file တစ်ခုတွင် ထားပါသည်',
      'အပေါ်တွင် provider မရှိသော consumer များက default value ကို သုံးပါသည်',
      'Provider သည် consumer ၏ parent ဖြစ်ပါက context ပြောင်းလဲလိုက်ပါက consumer များ ပြန်လည် render မဖြစ်ပါ',
    ],
  },

  'context/provider': {
    explanation:
      'Provider component က value prop တစ်ခုကို လက်ခံပြီး ၎င်းအတွင်း render ဖြစ်သော အားလုံးအတွက် context ထဲသို့ ထည့်ပါသည်။ Provider အလွန်ကျော် မည်မျှနေစိုင်း ရှိနိုင်ပါသည်။ consumer တစ်ခုသည် အမြဲယင်းနီးဆုံးရှိသော provider ကို သုံးပါသည်။ Value ကို useContext ဖြင့် ဖတ်ပါသည် — props မှတစ်ဆင့် ဘယ်တော့မှ မဖတ်ပါ။',
    flow: ['ThemeContext.Provider', 'value: theme', 'မည်သည့် descendant မဆို', 'useContext(ThemeContext)'],
    keyPoints: [
      'Provider အောက်ရှိ component အားလုံးက value ကို ဖတ်နိုင်ပါသည်',
      'Provider များ အလွန်ကျော်ထားပါက အနီးဆုံး provider က အတည်ပြပါသည်',
      'Consumer များလက်ခံရသည်မှာ value prop တစ်ခုတည်းသာ ဖြစ်ပါသည်',
      'Value ကို တည်မြဲအောင် ထိန်းသိမ်းပါ — tree ကြီးများအတွက် value object ကို memoize ပါ',
    ],
  },

  'context/use-context': {
    explanation:
      'useContext က component တစ်ခုကို context တစ်ခုနှင့် ချိတ်ဆက်ပြီး လက်ရှိ value ကို ပြန်ပေးပါသည်။ Value ပြောင်းလဲမည့်အခါတိုင်း component ပြန်လည် render ဖြစ်ပါသည် — tree ထဲမှာ ဘယ်လောက်နက်မှရှိသည်ဖြစ်စေ မဆိုတောင် ဖြစ်ပါသည်။ ဤနည်းသည် context က prop drilling အများစုကို အစားထိုးနိုင်ရသည့် အကြောင်းရင်းများ ဖြစ်ပါသည်။',
    flow: [
      'useContext(ThemeContext)',
      'Theme: light',
      'Provider တွင် toggle',
      'Theme: dark',
    ],
    keyPoints: [
      'const value = useContext(MyContext)',
      'Hook များကို component သို့မဟုတ် custom hook ၏ အပေါ်ဆုံးအဆင့်တွင်သာ ခေါ်နိုင်ပါသည်',
      'ပြောင်းလဲသော context ၏ consumer အားလုံး ပြန်လည် render ဖြစ်ပါသည်',
      'Value အများကြိမ်း ပြောင်းလဲသောအခါ context များကို ပြောင်းခြင်းအရှိန်အပြင််အလိုက် ခွဲခြားပါ',
    ],
  },

  // ------------------------------------------------------------------ 7
  'custom-hooks/what-is-a-custom-hook': {
    explanation:
      'Custom hook ဆိုတာ အမည်က use ဖြင့် စတင်ပြီး အခြား hook များကို ခေါ်နိုင်သော function တစ်ခု ဖြစ်ပါသည်။ State ပါဝင်သော logic တစ်ခိုက်ကို အမည်ပေးပြီး ပြန်လည်အသုံးပြုနည်းမှာ ဤနည်းလမ်းဖြစ်ပါသည်။ ၎င်းက component အသစ် မဖန်တီးပါ၊ တစ်ခုတည်းသော hook ကို သုံးသည့် component နှစ်ခုသည် လုံးဝ သီးခြားသော state များ ဆက်လက်ပိုင်ဆိုင်ကြပါသည်။',
    flow: [
      'Component A + B',
      'မျှဝေအသုံးပြုသော state logic',
      'useCounter()',
      'ပြန်လည်အသုံးပြုနိုင်သော်လည်း state သီးခြား',
    ],
    keyPoints: [
      'Hook အမည်ကို use ဖြင့် စတင်ပါ — ထိုကြောင့် rules of hooks အသုံးပြုနိုင်ပါသည်',
      'Logic ကိုသာ ဖြုတ်ယူပါ — JSX မဟုတ်ပါ — hook က value များ ပြန်ပေးပြီး component က render ပါသည်',
      'State သည် component instance တစ်ချက်လျှင်တစ်ခုသာ သိမ်းရှိပြီး hook မှတဆင့် မျှဝေခြင်း မရှိပါ',
      'Hook က value တစ်ခုထက် များများ ပေးပါက object အဖြစ် ပြန်ပေးပါ',
    ],
  },

  'custom-hooks/use-counter': {
    explanation:
      'useCounter သည် သင်ကြားရာတွင် အသုံးပြုသည့် ရိုးရှင်းသော hook တစ်ခု ဖြစ်ပါသည် — state တစ်ခု၊ functional update များဖြင့် တည်ဆောက်ထားသော action အများအပြားနှင့် caller အား ပြန်ပေးသည့် စီမံသော object တစ်ခု။ Consumer တိုင်းသည် ကိုယ်ပိုင် count ရှိသဖြင့် instance တစ်ခုက တစ်ခုကို မှားယွင်းစွာ ထိခိုက်မည် မဟုတ်ပါ။',
    flow: ['useCounter(10)', 'count: 10', 'increment / decrement', 'count: 11'],
    keyPoints: [
      'နောက်ကျက်သော value များ မဖြစ်စေရန် အမှန်တကယ် prev မှ update ပါ',
      'Hook က ပြောင်းလဲနိုင်ရန် initial value ကို default ပေးပါ',
      'Component က အနူးကို ပြန်လည်သတ်မှတ်ရန်လိုပါက reset ကို ပေးပါ',
      'Hook ကို သုံးသည့် component နှစ်ခုသည် count အမျိုးမျိုး သီးခြားထားပါမည်',
    ],
  },

  'custom-hooks/use-toggle': {
    explanation:
      'useToggle က boolean တစ်ခုနှင့် ၎င်းကို ပြောင်းပေးသော function ကို လည်ပတ်ပါသည်။ useState ၏ setter က function value များကို လျော့ချပါသည်။ ထို့ကြောင့် toggle က လက်ရှိ value ကို လက်ခံပြီး ပြောင်းလဲကို သိပ်ပြတ်သားစွာ ပြုလုပ်ပါသည်။ Bare boolean အစား ဖတ်လွယ်သော အမည်ဖြင့် value ကို ပြန်ပေးပါသည်။',
    flow: ['useToggle()', 'value: false', 'toggle()', 'value: true'],
    keyPoints: [
      'Functional update ဖြင့် ပြောင်းပါ — setValue((prev) => !prev)',
      'Function တစ်ခုကို state setter သို့ တိုက်ရိုက် မပေးပါနှင့်',
      'Extra setter များ ထည့်ပါက hook က ပိုမိုများသောနေရာများတွင် သုံးနိုင်ပါသည်',
      'Hook ငယ်များ ပေါင်းစပ်နိုင်ပါသည် — useToggle ကို useMenu အတွင်း ထည့်နိုင်ပါသည်',
    ],
  },

  'custom-hooks/use-input': {
    explanation:
      'useInput က input တစ်ခုကို state နှင့် ချိတ်ဆက်ပြီး value နှင့် change handler ကို ပြန်ပေးပါသည်။ ပြန်ပေးထားသော props များကို input ပေါ်တွင် spread လုပ်လိုက်ခြင်းက ဤ app ရှိ form တိုင်းတွင် copy-paste လုပ်နေရသော ထပ်ချက်ထပ်ချက် အားလုံးကို ဖယ်ရှားပါသည်။',
    flow: ['useInput("")', 'value + onChange', '<input /> အပေါ် spread', 'အသုံးပြုနေသော value'],
    keyPoints: [
      'Element ပေါ်တွင် spread လုပ်နိုင်ရန် value နှင့် onChange ကို ပြန်ပေးပါ',
      'Hook ကို ပြန်လည်အသုံးပြုနိုင်ရန် initial value လက်ခံပါ',
      'Hook ကြီးထွန်းလာသည်အလိုက် reset၊ focus နှင့် validation helper များ ထည့်ပါ',
      'Input တစ်ခုကို hook တစ်ခုကိုယ်စီ သုံးခြင်းက တစ်ချက်လျှောက် လွတ်လပ်အောင် ထိန်းသိမ်းပါသည်',
    ],
  },

  'custom-hooks/use-local-storage': {
    explanation:
      'useLocalStorage က initial value ကို localStorage မှ ဖတ်ပြီး ပြောင်းလဲမှုအားလုံးကို ပြန်လည်ရေးထားပါသည်။ Storage သည် မျှဝေအသုံးပြုသည့် ပြင်ပ system တစ်ခု ဖြစ်သဖြင့် hook သည် JSON မှားလျှင်၊ key မရှိပါက၊ quota ပြည့်နေပါက component ကို crash မဖြစ်စေဘဲ ကျော်တင်ရပါသည်။',
    flow: [
      'localStorage ဖတ်',
      'useState initial',
      'ပြောင်းလဲသည့်အခါ → localStorage တွင် ရေး',
      'Reload ပြီးလျှင် ပြန်ဖတ်',
    ],
    keyPoints: [
      'တစ်ခါတလျှင်သာ လုပ်ရန် useState initialiser အတွင်း storage ကို နှေးနှေးရှုသော်ဖြင့် ဖတ်ပါ',
      'JSON.parse က error ဖြစ်နိုင်သည် — try/catch ဖြင့် လည်ပတ်ပါ',
      'Functional update ကို သုံးပြီး ပြောင်းလဲမှုအားလုံးတွင် ရေးသားပါ',
      'Initialiser က mount ဖြစ်ချိန်တွင်သာ လုပ်ပါသည် — နောက်ပိုင်း ပြောင်းလဲမှုများက သိမ်းထားသော value ကို သုံးပါသည်',
    ],
  },

  // ------------------------------------------------------------------ 8
  'forms/controlled-input': {
    explanation:
      'Controlled input က မိမိ၏ value ကို React state မှ ရယူပြီး စာလုံးတိုင်းကို onChange မှတဆင့် ပြန်ကြားပါသည်။ Field ထဲတွင် ဘာပေါ်မည်ကို React က ဆုံးဖြတ်ပေးသဖြင့် ပြသနေသော value နှင့် သင့် state တို့ ဘယ်တော့မှ မညီညွတ်နိုင်ပါ။ Value ကို undefined အဖြစ် မထားပါက input သည် uncontrolled အဖြစ် ပြန်ရောက်ပါမည်။',
    flow: [
      'စာလုံးရိုက်',
      'onChange',
      'setValue',
      'အသစ် value ဖြင့် ပြန်လည် render',
    ],
    keyPoints: [
      'value + onChange က controlled pattern ဖြစ်ပါသည်',
      'Value က အမြဲ state မှသာ လာပါသည် — DOM မှနေသည် မဟုတ်ပါ',
      'onChange မရှိပါက input က uncontrolled ဖြစ်ပြီး warning ပေးပါသည်',
      'အမြဲ string ပေးပါ — null နှင့် undefined က input ကို uncontrolled ဖြစ်စေပါသည်',
    ],
  },

  'forms/form-submit': {
    explanation:
      'Form ထုတ်ပိုးမှုကို form ၏ onSubmit ဖြင့် ကိုင်တွယ်ပြီး browser က page ကို ပြန်ဖတ်ခြင်းကို တားရန် event.preventDefault() ကို ခေါ်ပါ။ သိမ်းဆည်းခင်း စစ်ဆေးပြီးနောက် state ကို ရှင်းလင်းပါ — ထိုကြောင့် form သည် နောက်တစ်ခုအတွက် အသင့်ဖြစ်ပါမည်။',
    flow: ['တင်ပိုး', 'onSubmit(e)', 'preventDefault()', 'State ဖတ်', 'သိမ်းပြီး reset လုပ်'],
    keyPoints: [
      'onSubmit အတွင်းး preventDefault() ကို အမြဲ ခေါ်ပါ',
      'Value များကို DOM ၏ FormData မှမဟုတ်ဘဲ state မှ ဖတ်ပါ',
      'Submit button များကို type="submit" ပေးပါ — Enter နှိပ်ချိန်တွင်လည်း အလုပ်လုပ်ပါမည်',
      'အောင်မြင်စွာ တင်ပိုးပြီးနောက် state ကို reset လုပ်ပါ',
    ],
  },

  'forms/multiple-inputs': {
    explanation:
      'Field အများအပြားအတွက် state object တစ်ခုတည်း ထားပြီး input တိုင်းကို name တစ်ခုစီ ပေးပါ။ handleChange တစ်ခုတည်းက တူညီသော key ကို update လုပ်သဖြင့် field တစ်ခု ထပ်မံထည့်ဖြစ်ရန် handler အသစ်မလိုပါ — key တစ်ခုနှင့် input တစ်ခုသာ လုံလောက်ပါသည်။ ဤနည်းသည် အခန်း 2.3 ရှိ object state ပုံစံနှင့် တူညီပါသည်။',
    flow: [
      'Input ပြောင်းလဲ',
      'name="email"',
      'setForm(prev => ({ ...prev, email }))',
      'ပြန်လည် render',
    ],
    keyPoints: [
      'State object တစ်ခု၊ change handler အမျိုးအစားတစ်ခုတည်း',
      'Input တွင် name သုံးပြီး event.target မှ ဖတ်ပါ',
      'Update တိုင်းတွင် ယခင် object ကို spread လုပ်ပါ',
      'အုပ်စုံကို အုပ်ပိုးထားသော field များအတွက် form.address.city ကဲ့သို့ နားလည်နိုင်သော path ထည့်ပါ',
    ],
  },

  'forms/validation': {
    explanation:
      'ဦးစွာ submit ဖြစ်ချိန်တွင် စစ်ဆေးပြီးနောက် field တစ်ခု အသုံးပြုပြီးသွားပြီးနောက် ထို field ကိုသာ ပြန်လည်စစ်ဆေးပါ။ အသုံးပြုသူ မရိုက်ထည့်ရသေးသော ဗလာ field အတွက် error ပြခြင်းသည် အသုံးမပြုစရာ ဖြစ်ပါသည်။ စည်းမျဉ်းများကို function များပါဝင်သော ရိုးရှင်းသော object အဖြစ် ထားပါ — ပြန်လည်အသုံးပြုနိုင်ရန်နှင့် စမ်းသပ်နိုင်ရန်။',
    flow: [
      'တင်ပိုး',
      'စည်းမျဉ်းများ လုပ်ဆောင်',
      'Error များ သတ်မှတ်',
      'Message များ ပြပါသည်',
      'ပြောင်းလဲသည့်အခါ ပြန်စစ်ဆေး',
    ],
    keyPoints: [
      'Submit ဖြစ်ချိန်တွင် စစ်ဆေးပြီးနောက် field အသုံးပြုပြီးသွားပါက အသက်ဝင်စစ်ဆေး',
      'စည်းမျဉ်းများကို component များမှ သီးခြားထားပြီး ရိုးရှင်းသော function များအဖြစ် ထိန်းသိမ်းပါ',
      'မှားသော field များကို aria-invalid ဖြင့် သတ်မှတ်ပြီး message များကို aria-describedby ဖြင့် ချိတ်ပါ',
      'Validation တစ်ခုတည်းကို မအာမခံပါ — server တွင်လည်း စစ်ဆေးပါ',
    ],
  },

  // ------------------------------------------------------------------ 9
  'advanced/use-reducer': {
 explanation:
      'useReducer က state ပြောင်းလဲမှုများကို pure function တစ်ခုအတွင်း ရွှေ့ပြောင်းပါသည်။ နေရာအနေအထား ပျံ့နှံနေသော setter သုံးခုအစား action type တစ်ခုနှင့် ခွင့်ပြုထားသော ပြောင်းလဲမှုအားလုံးကို ဖော်ပြသည့် reducer တစ်ခု ရရှိပါသည်။ Update များ အချင်းချင်း အပေါ်မူတည်လာလိုက်သောအခါ reducer ကို လိုက်ရှာရန်နှင့် စမ်းသပ်ရန် များလျားလွယ်ကြပါသည်။',
    flow: ['Action ပို့', 'reducer(state, action)', 'State အသစ်', 'ပြန်လည် render'],
    keyPoints: [
      'Reducer သည် pure ဖြစ်ရမည် — side effect မရှိ၊ mutation မရှိ',
      'ပြန်လည် render မလုပ်ရန် state object တူညီကို ပြန်ပေးပါ',
      'ပြောင်းလဲမှုတစ်ခုကို action တစ်ခုက ကိုယ်ပြင်ပါက လုပ်လုပ်ပုံကို လိုက်ရှာရန်နှင့် log လုပ်ရန် လွယ်ပါသည်',
      'ရှုပ်ထွေးသော global state များအတွက် useReducer က context နှင့် ကောင်းစွာ ပေါင်းစပ်ပါသည်',
    ],
  },

  'advanced/use-transition': {
    explanation:
      'useTransition က update တစ်ခုကို အရေးမကြီးသောအဖြစ် သတ်မှတ်ပါသည်။ React က အနောက်ကွယ်တွင် state အသစ်ကို render လုပ်ပြီး လုပ်ဆောင်နေစဉ်လက်ရှိ UI ကို အသုံးချနိုင်အောင် ထိန်းသိမ်းထားပြီး transition ပြီးမီ isPending ကို ပြပါသည်။ ၎င်းက text input များကို ထိန်းချုပ်နိုင်ပါ — ထိုအတွက် useDeferredValue ကို သုံးပါ။',
    flow: [
      'startTransition(() => setTab(next))',
      'အချွေးဟောင်း UI က အသုံးချနိုင်နေသည်',
      'isPending true',
      'UI အသစ် ပေါ်လာပါသည်',
    ],
    keyPoints: [
      'အရေးမကြီးသော update များကို အနောက်ကွယ်တွင် render ပါသည်',
      'isPending က သိလိုနိုင်သည့် loading state အနေအထား ပြရန် ပြန်ပေးပါသည်',
      'Transition ဖြစ်နေစဉ် အသုံးပြုနေသော UI က တုံ့ပြန်ရှိနေပါသည်',
      'Input value ကို ထိန်းချုပ်ရန် transition ကို မသုံးပါ',
    ],
  },

  'advanced/use-deferred-value': {
    explanation:
      'useDeferredValue က value တစ်ခု၏ နောက်ကျက်သည့် ဒုတိယ copy တစုံ ပြန်ပေးပါသည်။ Component က ချက်ချင်းက ကုန်ကျသောနေရာများအတွက် value အသစ်ဖြင့် render ဖြစ်ပြီး ကုန်ကျသောနေရာမှာ React နောက်ရောက်သည့်အထိ ယခင် value ကို ဆက်လက်သုံးပါသည်။ ရှည်လျားသော list တစ်ခုကို filter လုပ်နေစဉ် search box ကို တုံ့ပြန်ရှိအောင် ထိန်းသိမ်းရန် ဤနည်းသည် အသုံးချပါသည်။',
    flow: [
      'မြန်မြန်ရိုက်',
      'Deferred value က နောက်ကျနေသည်',
      'ကုန်ကျသော list က ယခင် value ကို သုံး',
      'React က နောက်ရောက်ပါသည်',
    ],
    keyPoints: [
      'Deferred value သည် အမှန် value ကို render တစ်ခုနှစ်ခုမျှ နောက်ကျနေပါသည်',
      'Input ပိုင်ဆိုင်သော state မဟုတ်ဘဲ ကုန်ကျသော အလုပ်များကိုသာ နှေးဖွဲ့ရန် သုံးပါ',
      'Data ရယူခြင်းအတွက် Suspense နှင့် ပေါင်းစပ်ပါ',
      'useTransition နှင့် နှိုင်းယှဉ်ပါ — ဤနည်းက value ကို နှေးဖွဲ့ပြီး အဲဒီက update ကို နှေးဖွဲ့ပါသည်',
    ],
  },

  'advanced/use-id': {
    explanation:
      'useId က hook ကို သုံးသည့် component အားလုံးတွင် တူညီသော id တစ်ခု ထုတ်လုပ်ပေးပြီး — Math.random သို့မဟုတ် counter ကဲ့သို့မဟုတ်ဘဲ — server နှင့် client အကြား တူညီအောင် ဆက်လက်တူညီနေပါသည်။ ထို့ကြောင့် label ကို input နှင့် htmlFor နှင့် id ဖြင့် ချိတ်ဆက်ရန် မှန်ကန်သောနည်းလမ်း ဖြစ်ပါသည်။',
    flow: ['useId()', ':r1:', 'label htmlFor + input id', 'မှန်ကန်သော ဆက်နွယ်မှု'],
    keyPoints: [
      'တည်မြဲသော unique id string တစ်ခု ပြန်ပေးပါသည်',
      'SSR အတွက်လည်း index အသုံးမပြုနိုင်သော list များအတွက်လည်း ဘေးကင်းပါသည်',
      'htmlFor/id နှင့် aria-describedby တွဲများအတွက် သုံးပါ',
      'ဒီဇိုင်း database id အစစ်မှန်ကို အစားထိုးနိုင်ပါ',
    ],
  },

  'advanced/use-layout-effect': {
    explanation:
      'useLayoutEffect က DOM ပြောင်းလဲပြီးနောက်မှ ဖြစ်ပြီး browser က ရေးဆွဲခင်မ လုပ်ပါသည်။ ထို့ကြောင့် အသုံးပြုသူသည် အကြားအဆင့် state ကို ဘယ်တော့မှ မမြင်နိုင်ပါ။ DOM ကို ဦးစွာ တိုင်းတာရန် သို့မဟုတ် ပြောင်းနေရမည်ဖြစ်သောအခါမျှသာ သုံးပါ — element တစ်ခုကို တိုင်းတာခြင်း သို့မဟုတ် နေရာချရောက်စေခြင်း။ ကျန်သောအားလုံးအတွက် useEffect က သင့်တော်ပါသည်။',
    flow: [
      'DOM ပြောင်းလဲ',
      'useLayoutEffect လုပ်ဆောင် (ရေးဆွဲခင်မ)',
      'တိုင်းတာ / ညှိတွေး',
      'Browser က ရေးဆွဲ',
    ],
    keyPoints: [
      'ပြီးမီခင်မ မရေးဆွဲမှုကို တားပါသည်',
      'မဟုတ်ပါက flicker ဖြစ်မည့် တိုင်းတာမှုများအတွက် သုံးပါ',
      'useEffect ကို သုံးပါ — လျားမြန်ပြီး paint ကို မတားပါ',
      'SSR application များတွင် server က useLayoutEffect အတွက် သတိပြီးပါသည်',
    ],
  },

  'advanced/use-imperative-handle': {
    explanation:
      'useImperativeHandle က ကလေး component သည် မိမိ၏ ref က ဘာများကို ပေးမည်ကို ရွေးချယ်ခွင့်ပေးပါသည်။ DOM node တစ်ခုလုံးကို parent အား မပေးဘဲ parent က ခေါ်ခွင့်ရသည့် method များပါ ပါဝင်သော အသေးစား object တစုံ ပြန်ပေးပါသည် — ထိုစီးချက်ဖြင့် child ၏ အတွင်းအင်းအဖွဲ့ကို သီးသန့်ခံနိုင်ပါသည်။',
    flow: [
      'Parent က ref ဖန်တီး',
      'useImperativeHandle(ref, () => ({ focus }))',
      'Parent က ref.current.focus() ကို ခေါ်',
    ],
    keyPoints: [
      'Ref လက်ခံရန် forwardRef နှင့် တွဲဖက်ပါ',
      'Parent သည် အသုံးပြုရမည့် method များကိုသာ ပြန်ပေးပါ',
      'အတွင်းတွင် အသုံးပြုထားသော reactive value များကို dependency အဖြစ် စာရင်းထည့်ပါ',
      'Ref အလွတ်ကို ပေးပါက parent က DOM node ကို တိုက်ရိုက်လက်ခောက်နိုင်ပါသည်',
    ],
  },

  'advanced/use-sync-external-store': {
    explanation:
      'useSyncExternalStore က React အပြင်ဘက်တွင် တည်ရှိသော store — websocket၊ Web Worker၊ event emitter — သို့ component တစ်ခုကို ချိတ်ဆက်ပါသည်။ React က render တိုင်းတွင် getSnapshot ကို ခေါ်ပြီး snapshot ပြောင်းလဲသည့်အခါ component ကို ပြန်လည် render ပါသည် — ပြင်ပ store များ တည်မြဲရှိနေရန် လိုအပ်သည့်အတိုင်း ဖြစ်ပါသည်။',
    flow: [
      'getSnapshot()',
      'Value ဖြင့် render',
      'subscribe(listener)',
      'Store ပြောင်းလဲ → ပြန်လည် render',
    ],
    keyPoints: [
      'subscribe၊ getSnapshot နှင့် လိုအပ်ပါက getServerSnapshot တို့ လိုအပ်ပါသည်',
      'getSnapshot က cached value ပြန်ပေးရပါမည် — ခေါ်တိုင်း object အသစ်ပေးပါက loop ဖြစ်ပါသည်',
      'React မဟုတ်သော store များကို ဘေးကင်းစွာ React ထဲ ယူဆောင်ရန် သုံးပါ',
      'ဤနည်းက အများဆုံး state library များ တည်ဆောက်ရာတွင် အခြေခံအသုံးပြုထားကြသည့် primitive ဖြစ်ပါသည်',
    ],
  },

  // ------------------------------------------------------------------ 10
  'patterns/composition': {
    explanation:
      'Boolean prop မောက်ခန့်ပါသည့် component တစ်ခုထက် အပိုင်းအစိတ်အပိုးငယ်များ ဖန်တီးပြီး parent က တည်ဆောက်ပေးပါသည်။ ခေါ်သူသည် လိုအပ်သော ဖွဲ့စည်းပုံကိုပင် တောင်းတင်နိုင်ပြီး အစိတ်အပိုးများက အချင်းချင်း မသိကြောင်းကြောင့် ပြန်လည်အသုံးပြုနိုင်ဆက်နေပါသည်။',
    flow: ['အသေးငယ် building block များ', 'Parent က တည်ဆောက်', 'Layout ကို ခေါ်အသုံးပြုသောနေရာမှာ သတ်မှတ်'],
    keyPoints: [
      'Configuration prop များအစား children နှင့် composition ကို သုံးပါ',
      'အစိတ်အပိုးများ လက်တွေ့ရှိစေရန် className နှင့် prop အပိုများကို လက်ခံပါ',
      'အစိတ်အပိုးများ အချင်းချင်း မသိကြောင်းကို ထိန်းသိမ်းပါ',
      'ဆက်စပ်သော component များသည် တစ်စုံဖြစ်ပါက file တစ်ခုတည်းတွင် ထားပါ',
    ],
  },

  'patterns/prop-drilling': {
    explanation:
      'Prop drilling ဆိုတာ အဲဒီ prop ကို ဂရုစိတ်မရှိသော component များထံတိုင်း တန်းဆက်ပို့ခြင်းဖြစ်ပြီး လိုအပ်သော component တစ်ခုသို့သာ ရောက်ရှိစေရန် လုပ်သည်မှာ ဖြစ်ပါသည်။ အလုပ်လုပ်ပါသော်လည်း prop ပြောင်းလဲသည့်အခါ component အကြားလိုင်းများး အားလုံး ပြောင်းလဲရပါသည်။ ဖြေရှင်းနည်းများမှာ children၊ composition သို့မဟုတ် context ဖြစ်ပါသည် — ပုံမှန်ဆိုလျှင် composition ဖြစ်ပါသည်။ အဲဒါက wrapper ကိုပါ ဖယ်ရှားပေးလို့ရသောကြောင့်။',
    flow: [
      'အပေါ်ဆုံးတွင် data ရှိ',
      'အဆင့် ၃ မျိုးဆက်ချ ပေးပို့',
      'အလွတ်လျှင် အလျော့ချ',
      'အောက်ဆုံးတွင် လိုအပ်',
    ],
    keyPoints: [
      'Prop drilling က error မဟုတ်ပါ — tree က လွန်လိုက်နေသော လက္ခဏာ ဖြစ်ပါသည်',
      'Composition က ပေးဆက်သွားသော component ကို ပုံမှန်အတွက် လုံးဝဖယ်ရှားပေးပါသည်',
      'Value က အမှန်တကယ် global ဆိုပါက context က မှန်ကန်သော ဖြေရှင်းနည်း ဖြစ်ပါသည်',
      'State ကို အပေါ်တင်တင်ခြင်းသည်လည်း မှန်ကန်သော အဖြေပါပါသည်',
    ],
  },

  'patterns/compound-components': {
    explanation:
      'Compound component ဆိုတာ မျှဝေအသုံးပြုသော state ပိုင်ဆိုင်သည့် parent တစ်ခုနှင့် ထို state ကို context မှတဆင့် ဖတ်သည့် child များပါပါသည်။ ခေါ်သူများက အစိတ်အပိုးများကို တည်ဆောက်ကြသော်လည်း အချိုက်ချင်း မသီးခြားမထွက်နိုင်ပါ — ထိုကြောင့် <Tabs><TabList><Tab/></TabList><TabPanel/></Tabs> ကဲ့သို့ ဖွဲ့စည်းပုံ တည်မြဲသော API တစ်ခု ရရှိပါသည်။',
    flow: [
      'Parent က state ကိုင်',
      'Provider က child များကို လည်ပတ်',
      'Child များက useContext ခေါ်',
      'မျှဝေအသုံးပြုသော state',
    ],
    keyPoints: [
      'Parent က state ပိုင်ဆိုင်ပြီး child များက context မှတဆင့် ဖတ်ပါသည်',
      'Child များသည် parent အတွင်း ထည့်ရမည် — မဟုတ်ပါက အမှားကို ရှင်းရှင်း ဖြစ်စေပါ',
      'ဖွဲ့စည်းပုံကို ခေါ်သူက ထိန်းချုပ်ပြီး အလုပ်လုပ်ပုံကို library က ထိန်းချုပ်ပါသည်',
      'Radix၊ Headless UI နှင့် React Aria တို့နောက်ကပိုင်းရှိ ပုံစံ ဖြစ်ပါသည်',
    ],
  },

  'patterns/container-presentational': {
    explanation:
      'Container component က data — ရယူခြင်း၊ state၊ effect — ကို ပိုင်ဆိုင်ပြီး prop များသာ လက်ခံပြီး ကိုယ်ပိုင် logic မရှိသော presentational component ကို render ပါသည်။ အကျိုးက စမ်းသပ်လွယ်ခြင်း ဖြစ်ပါသည် — UI သည် ၎င်း၏ prop များ၏ pure function ဖြစ်သဖြင့် ဘာမျှ mock မလုပ်ဘဲ စမ်းသပ်နိုင်ပါသည်။',
    flow: [
      'Container: ရယူ + state',
      'Props',
      'Presentational: UI သာ',
      'Pure နှင့် စမ်းသပ်လွယ်',
    ],
    keyPoints: [
      'Container က data ကို သိရှိပြီး view က မသိပါ',
      'Presentational component သည် ၎င်း၏ prop များ၏ pure function ဖြစ်ပါသည်',
      'စမ်းသပ်ရ၊ ပြန်လည်အသုံးပြုရ၊ Storybook တွင် render ရ နည်းပါသည်',
      'Hook များနှင့်အတူ ဤခွဲခြားခြင်းသည် မောက်ချက်စည်းဥပဒေ ဖြစ်ပြီး ချည်းကပိုင်း စည်းမျဉ်း မဟုတ်ပါ',
    ],
  },

  'patterns/render-props': {
    explanation:
      'Render prop ဆိုတာ child အဖြစ် ပေးထားသော function တစ်ခု ဖြစ်ပါသည် — ထိုကြောင့် မျှဝေအသုံးပြုသော state ကို မည်လို ပြသမည်ကို ခေါ်သူက ဆုံးဖြတ်ပါသည်။ Component က state နှင့် logic ကို ထိန်းပိုင်ပြီး နှစ်ခုစလုံးကို function အား လွှဲပေးပါသည်။ အကျိုးဆက် — function က render တိုင်းအတွက် reference အသစ် ဖြစ်သဖြင့် useCallback ကို မကြာသေးမီ တွဲသုံးရပါသည်။',
    flow: [
      'Component က state ကိုင်',
      'children(state) ကို ခေါ်',
      'သင့် function က UI ကို render ပါသည်',
    ],
    keyPoints: [
      'Component ၏ child သည် JSX မဟုတ်ဘဲ function တစုံ ဖြစ်ပါသည်',
      'Rendering ကို ခေါ်သူက အပြည့်အစုံ ထိန်းချုပ်ရရှိပါသည်',
      'Function ကို ခေါ်ရပါမည် — component reference အဖြစ် ဘယ်တော့မှ မသတ်မှတ်ပါ',
      'အလုပ်တူတို့အတွက် children-as-a-function သို့မဟုတ် compound component ကိုလည်း စဉ်းစားပါ',
    ],
  },

  'patterns/higher-order-components': {
    explanation:
      'Higher-order component ဆိုတာ component တစ်ခုကို လက်ခံပြီး အပိုပိုသည့် behaviour ပါဝင်သော component အသစ်တစ်ခု ပြန်ပေးသော function တစ်ခု ဖြစ်ပါသည် — logging၊ auth၊ theme တို့။ ၎င်းသည် decorator ၏ functional version ဖြစ်ပြီး Redux၊ React Router နှင့် styled-components ကဲ့သို့ library များက သင့် code ကို မထိရောက်ဘဲ feature များ ထည့်ပေးသည့် နည်းလမ်းများ ဖြစ်ပါသည်။',
    flow: [
      'withFeature(Component)',
      'Wrapper ပြန်ပေး',
      'Wrapper က Component ကို render',
      'အပို behaviour ဖြင့်',
    ],
    keyPoints: [
      'HOC တစ်ခုသည် component တစ်ခု ယူပြီး component တစုံ ပြန်ပေးပါသည်',
      'Prop အားလုံးကို {...props} ဖြင့် ဖြတ်ဆက်ပေးပါ',
      'Ref များကို သိပ်ပြတ်သားစွာ forward လုပ်ပါ — မဟုတ်ပါက HOC က တားဆီးပါမည်',
      'React DevTools ထွက်ခြင်းကို ဖတ်လွယ်အောင် ပြန်ပေးသည့် component အမည်ကို ပေးအမည်ပါ',
    ],
  },
}
