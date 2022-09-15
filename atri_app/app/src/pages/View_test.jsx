import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useButton3Cb, useTextBox32Cb, useButton4Cb, useTextBox33Cb, useButton5Cb, useTextBox34Cb, useButton6Cb, useTextBox35Cb, useTextBox36Cb, useButton7Cb, useTextBox37Cb, useFlex67Cb, useTextBox38Cb, useFlex68Cb, useTextBox39Cb, useFlex69Cb, useTextBox40Cb, useFlex70Cb, useTextBox41Cb, useFlex71Cb, useImage37Cb, useTextBox42Cb, useTextBox43Cb, useTextBox44Cb, useImage38Cb, useImage39Cb, useTextBox45Cb, useTextBox46Cb, useTextBox47Cb, useTextBox48Cb, useTextBox49Cb, useTextBox50Cb, useImage40Cb, useFlex72Cb, useFlex73Cb, useFlex74Cb, useFlex75Cb, useFlex76Cb, useFlex77Cb, useFlex78Cb, useFlex79Cb, useFlex80Cb, useFlex81Cb, useFlex82Cb, useFlex83Cb, useButton8Cb, useTextBox51Cb, useImage41Cb, useTextBox52Cb, useImage42Cb, useButton9Cb, useFlex84Cb, useFlex85Cb, useFlex86Cb, useFlex87Cb, useFlex88Cb, useButton10Cb, useFlex89Cb, useInput1Cb, useTextBox53Cb, useFlex90Cb, useFlex91Cb, useFlex92Cb, useFlex93Cb, useFlex94Cb, useTextBox54Cb, useFlex95Cb, useFlex96Cb, useImage43Cb, useImage44Cb, useImage45Cb, useFlex97Cb, useFlex98Cb, useFlex99Cb, useFlex100Cb, useFlex101Cb, useFlex102Cb, useFlex103Cb, useTextBox55Cb, useFlex104Cb } from "../page-cbs/view_test";

export default function ViewTest() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  useLayoutEffect(()=>{
    setEffectivePropsForPage("view_test")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("view_test")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Button3Props = useStore((state)=>state["view_test"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["view_test"]["Button3"]);
const Button3Cb = useButton3Cb()
const TextBox32Props = useStore((state)=>state["view_test"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["view_test"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const Button4Props = useStore((state)=>state["view_test"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["view_test"]["Button4"]);
const Button4Cb = useButton4Cb()
const TextBox33Props = useStore((state)=>state["view_test"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["view_test"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const Button5Props = useStore((state)=>state["view_test"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["view_test"]["Button5"]);
const Button5Cb = useButton5Cb()
const TextBox34Props = useStore((state)=>state["view_test"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["view_test"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Button6Props = useStore((state)=>state["view_test"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["view_test"]["Button6"]);
const Button6Cb = useButton6Cb()
const TextBox35Props = useStore((state)=>state["view_test"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["view_test"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["view_test"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["view_test"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Button7Props = useStore((state)=>state["view_test"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["view_test"]["Button7"]);
const Button7Cb = useButton7Cb()
const TextBox37Props = useStore((state)=>state["view_test"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["view_test"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Flex67Props = useStore((state)=>state["view_test"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["view_test"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const TextBox38Props = useStore((state)=>state["view_test"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["view_test"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const Flex68Props = useStore((state)=>state["view_test"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["view_test"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const TextBox39Props = useStore((state)=>state["view_test"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["view_test"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const Flex69Props = useStore((state)=>state["view_test"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["view_test"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const TextBox40Props = useStore((state)=>state["view_test"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["view_test"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const Flex70Props = useStore((state)=>state["view_test"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["view_test"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const TextBox41Props = useStore((state)=>state["view_test"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["view_test"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const Flex71Props = useStore((state)=>state["view_test"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["view_test"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Image37Props = useStore((state)=>state["view_test"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["view_test"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox42Props = useStore((state)=>state["view_test"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["view_test"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["view_test"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["view_test"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["view_test"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["view_test"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const Image38Props = useStore((state)=>state["view_test"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["view_test"]["Image38"]);
const Image38Cb = useImage38Cb()
const Image39Props = useStore((state)=>state["view_test"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["view_test"]["Image39"]);
const Image39Cb = useImage39Cb()
const TextBox45Props = useStore((state)=>state["view_test"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["view_test"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["view_test"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["view_test"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["view_test"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["view_test"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["view_test"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["view_test"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["view_test"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["view_test"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["view_test"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["view_test"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Image40Props = useStore((state)=>state["view_test"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["view_test"]["Image40"]);
const Image40Cb = useImage40Cb()
const Flex72Props = useStore((state)=>state["view_test"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["view_test"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex73Props = useStore((state)=>state["view_test"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["view_test"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Flex74Props = useStore((state)=>state["view_test"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["view_test"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex75Props = useStore((state)=>state["view_test"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["view_test"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex76Props = useStore((state)=>state["view_test"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["view_test"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["view_test"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["view_test"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex78Props = useStore((state)=>state["view_test"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["view_test"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex79Props = useStore((state)=>state["view_test"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["view_test"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Flex80Props = useStore((state)=>state["view_test"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["view_test"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Flex81Props = useStore((state)=>state["view_test"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["view_test"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Flex82Props = useStore((state)=>state["view_test"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["view_test"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Flex83Props = useStore((state)=>state["view_test"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["view_test"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const Button8Props = useStore((state)=>state["view_test"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["view_test"]["Button8"]);
const Button8Cb = useButton8Cb()
const TextBox51Props = useStore((state)=>state["view_test"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["view_test"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const Image41Props = useStore((state)=>state["view_test"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["view_test"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox52Props = useStore((state)=>state["view_test"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["view_test"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const Image42Props = useStore((state)=>state["view_test"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["view_test"]["Image42"]);
const Image42Cb = useImage42Cb()
const Button9Props = useStore((state)=>state["view_test"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["view_test"]["Button9"]);
const Button9Cb = useButton9Cb()
const Flex84Props = useStore((state)=>state["view_test"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["view_test"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Flex85Props = useStore((state)=>state["view_test"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["view_test"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex86Props = useStore((state)=>state["view_test"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["view_test"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Flex87Props = useStore((state)=>state["view_test"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["view_test"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex88Props = useStore((state)=>state["view_test"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["view_test"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Button10Props = useStore((state)=>state["view_test"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["view_test"]["Button10"]);
const Button10Cb = useButton10Cb()
const Flex89Props = useStore((state)=>state["view_test"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["view_test"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Input1Props = useStore((state)=>state["view_test"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["view_test"]["Input1"]);
const Input1Cb = useInput1Cb()
const TextBox53Props = useStore((state)=>state["view_test"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["view_test"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Flex90Props = useStore((state)=>state["view_test"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["view_test"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Flex91Props = useStore((state)=>state["view_test"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["view_test"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const Flex92Props = useStore((state)=>state["view_test"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["view_test"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Flex93Props = useStore((state)=>state["view_test"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["view_test"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Flex94Props = useStore((state)=>state["view_test"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["view_test"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const TextBox54Props = useStore((state)=>state["view_test"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["view_test"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Flex95Props = useStore((state)=>state["view_test"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["view_test"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex96Props = useStore((state)=>state["view_test"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["view_test"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Image43Props = useStore((state)=>state["view_test"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["view_test"]["Image43"]);
const Image43Cb = useImage43Cb()
const Image44Props = useStore((state)=>state["view_test"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["view_test"]["Image44"]);
const Image44Cb = useImage44Cb()
const Image45Props = useStore((state)=>state["view_test"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["view_test"]["Image45"]);
const Image45Cb = useImage45Cb()
const Flex97Props = useStore((state)=>state["view_test"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["view_test"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex98Props = useStore((state)=>state["view_test"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["view_test"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Flex99Props = useStore((state)=>state["view_test"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["view_test"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex100Props = useStore((state)=>state["view_test"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["view_test"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex101Props = useStore((state)=>state["view_test"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["view_test"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex102Props = useStore((state)=>state["view_test"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["view_test"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex103Props = useStore((state)=>state["view_test"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["view_test"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const TextBox55Props = useStore((state)=>state["view_test"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["view_test"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Flex104Props = useStore((state)=>state["view_test"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["view_test"]["Flex104"]);
const Flex104Cb = useFlex104Cb()

  return (<>
  <Flex2 {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<TextBox2 {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<Flex2 {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<Flex2 {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<TextBox2 {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Flex2>
<Flex2 {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<Flex2 {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<Image2 {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
<TextBox2 {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Flex2>
<Flex2 {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Button1 {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Flex2>
<Flex2 {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<TextBox2 {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<Image2 {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Flex2 {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<Flex2 {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<Flex2 {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Image2 {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
</Flex2>
</Flex2>
<Flex2 {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<Flex2 {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Flex2 {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Button1 {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
<TextBox2 {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Flex2>
<TextBox2 {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Flex2>
<Flex2 {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Flex2 {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Button1 {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
<TextBox2 {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Flex2>
<TextBox2 {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Flex2>
<Flex2 {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Flex2 {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Button1 {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
<TextBox2 {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Flex2>
<TextBox2 {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Flex2>
<Flex2 {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<Flex2 {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<Button1 {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
<TextBox2 {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
</Flex2>
<TextBox2 {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Flex2>
<Flex2 {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Flex2 {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Button1 {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
<TextBox2 {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
</Flex2>
<TextBox2 {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<Image2 {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<Image2 {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<Image2 {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
</Flex2>
<Flex2 {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<Flex2 {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Button1 {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
</Flex2>
<Flex2 {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Input {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
<Flex2 {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<Button1 {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<TextBox2 {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<Flex2 {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Flex2 {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<Flex2 {...Flex83Props} {...Flex83Cb} {...Flex83IoProps}>
<Image2 {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Flex2>
<Flex2 {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<TextBox2 {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox2 {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox2 {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
</Flex2>
</Flex2>
<Flex2 {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<Flex2 {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<Image2 {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Flex2>
<Flex2 {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<TextBox2 {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<TextBox2 {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox2 {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
</Flex2>
</Flex2>
<Flex2 {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Flex2 {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Image2 {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Flex2>
<Flex2 {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<TextBox2 {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<TextBox2 {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox2 {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
