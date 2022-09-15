import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Upload } from "@atrilabs/react-component-manifests/src/manifests/Upload/Upload.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { useImage34Cb, useUpload1Cb, useTextBox28Cb, useTextBox29Cb, useImage35Cb, useImage36Cb, useTextBox30Cb, useFlex61Cb, useFlex62Cb, useFlex63Cb, useFlex64Cb, useFlex65Cb, useTextBox31Cb, useFlex66Cb } from "../page-cbs/new_test";

export default function NewTest() {
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
    setEffectivePropsForPage("new_test")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("new_test")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Image34Props = useStore((state)=>state["new_test"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["new_test"]["Image34"]);
const Image34Cb = useImage34Cb()
const Upload1Props = useStore((state)=>state["new_test"]["Upload1"]);
const Upload1IoProps = useIoStore((state)=>state["new_test"]["Upload1"]);
const Upload1Cb = useUpload1Cb()
const TextBox28Props = useStore((state)=>state["new_test"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["new_test"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["new_test"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["new_test"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const Image35Props = useStore((state)=>state["new_test"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["new_test"]["Image35"]);
const Image35Cb = useImage35Cb()
const Image36Props = useStore((state)=>state["new_test"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["new_test"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox30Props = useStore((state)=>state["new_test"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["new_test"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const Flex61Props = useStore((state)=>state["new_test"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["new_test"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex62Props = useStore((state)=>state["new_test"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["new_test"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex63Props = useStore((state)=>state["new_test"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["new_test"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex64Props = useStore((state)=>state["new_test"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["new_test"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex65Props = useStore((state)=>state["new_test"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["new_test"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const TextBox31Props = useStore((state)=>state["new_test"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["new_test"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Flex66Props = useStore((state)=>state["new_test"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["new_test"]["Flex66"]);
const Flex66Cb = useFlex66Cb()

  return (<>
  <Flex1 {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<TextBox1 {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<Flex1 {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<TextBox1 {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox1 {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Flex1>
<Flex1 {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Flex1 {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Image1 {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<Upload {...Upload1Props} {...Upload1Cb} {...Upload1IoProps}/>
</Flex1>
</Flex1>
<Flex1 {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Image1 {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
</Flex1>
<Flex1 {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Image1 {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<TextBox1 {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
</Flex1>
</Flex1>
  </>);
}
