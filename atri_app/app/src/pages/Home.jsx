import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useImage1Cb, useTextBox1Cb, useImage2Cb, useTextBox2Cb, useImage3Cb, useTextBox3Cb, useImage4Cb, useTextBox4Cb, useImage5Cb, useTextBox5Cb, useImage6Cb, useTextBox6Cb, useImage7Cb, useTextBox7Cb, useImage8Cb, useTextBox8Cb, useImage9Cb, useTextBox9Cb, useTextBox10Cb, useImage10Cb, useImage11Cb, useFlex1Cb, useImage12Cb, useFlex2Cb, useImage13Cb, useFlex3Cb, useImage14Cb, useFlex4Cb, useImage15Cb, useFlex5Cb, useImage16Cb, useFlex6Cb, useImage17Cb, useFlex7Cb, useImage18Cb, useFlex8Cb, useImage19Cb, useFlex9Cb, useFlex10Cb, useImage20Cb, useButton1Cb, useImage21Cb, useTextBox11Cb, useImage22Cb, useTextBox12Cb, useTextBox13Cb, useImage23Cb, useFlex11Cb, useTextBox14Cb, useImage24Cb, useFlex12Cb, useTextBox15Cb, useImage25Cb, useFlex13Cb, useTextBox16Cb, useImage26Cb, useFlex14Cb, useTextBox17Cb, useImage27Cb, useFlex15Cb, useTextBox18Cb, useImage28Cb, useFlex16Cb, useTextBox19Cb, useImage29Cb, useFlex17Cb, useTextBox20Cb, useImage30Cb, useFlex18Cb, useTextBox21Cb, useImage31Cb, useFlex19Cb, useFlex20Cb, useImage32Cb, useTextBox22Cb, useFlex21Cb, useFlex22Cb, useFlex23Cb, useTextBox23Cb, useTextBox24Cb, useTextBox25Cb, useTextBox26Cb, useFlex24Cb, useFlex25Cb, useFlex26Cb, useFlex27Cb, useFlex28Cb, useFlex29Cb, useFlex30Cb, useFlex31Cb, useFlex32Cb, useFlex33Cb, useFlex34Cb, useFlex35Cb, useFlex36Cb, useFlex37Cb, useFlex38Cb, useFlex39Cb, useFlex40Cb, useFlex41Cb, useFlex42Cb, useFlex43Cb, useFlex44Cb, useFlex45Cb, useFlex46Cb, useFlex47Cb, useFlex48Cb, useFlex49Cb, useFlex50Cb, useFlex51Cb, useFlex52Cb, useFlex53Cb, useFlex54Cb, useFlex55Cb, useImage33Cb, useButton2Cb, useFlex56Cb, useFlex57Cb, useTextBox27Cb, useFlex58Cb, useFlex59Cb, useFlex60Cb } from "../page-cbs/Home";

export default function Home() {
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
    setEffectivePropsForPage("Home")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("Home")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()

  return (<>
  <Flex {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Flex {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Image {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
</Flex>
<Flex {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<TextBox {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<Flex {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Flex {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<TextBox {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<TextBox {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Flex>
<Flex {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Flex {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Image {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Flex>
<Flex {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Button {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
</Flex>
<Flex {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<TextBox {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<Image {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Flex {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Flex {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Image {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
<TextBox {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
</Flex>
<Flex {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Flex {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Flex {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Image {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
</Flex>
<Image {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Flex {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Image {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<TextBox {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Flex>
<Flex {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Flex {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Flex {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Image {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<TextBox {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
</Flex>
<Image {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<Flex {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Image {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<TextBox {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
</Flex>
<Flex {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Flex {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Flex {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Image {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<TextBox {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Flex>
<Image {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Flex {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Image {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<TextBox {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
</Flex>
<Flex {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Flex {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Flex {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Image {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
<TextBox {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
</Flex>
<Image {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Flex {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Image {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<TextBox {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Flex>
<Flex {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Flex {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Flex {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Image {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<TextBox {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
</Flex>
<Image {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Flex {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Image {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<TextBox {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Flex>
<Flex {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Flex {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Flex {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Image {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
<TextBox {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
</Flex>
<Image {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Flex {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Image {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<TextBox {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Flex>
<Flex {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Flex {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Flex {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Image {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
<TextBox {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
</Flex>
<Image {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Flex {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Image {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<TextBox {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Flex>
<Flex {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Flex {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Flex {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<Image {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
<TextBox {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
</Flex>
<Image {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Flex {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Image {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<TextBox {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
</Flex>
<Flex {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Flex {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Flex {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<Image {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
<TextBox {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
</Flex>
<Image {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Flex {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Image {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<TextBox {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
</Flex>
<Flex {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Flex {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Flex {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Image {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
<TextBox {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
</Flex>
<Image {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Button {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex>
</Flex>
  </>);
}
