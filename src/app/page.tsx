import { s_mono } from "./fonts";
import DisplayProducts from "@/components/Products";

export default async function Page() {
    //let data = await getData();
    
    return (
        <>
        <div className="">
        <div className={`${s_mono.className} before:z-[-1] mx-10 md:mx-20 before:absolute before:w-full before:bg-repeat before:bg-[length:39px_39px] before:h-full relative before:bg-[url('/common/dot.svg')] before:top-0 before:left-0 before:invert-[0.6] before:sepia-0 before:saturate-0 before:brightness-[1.02] before:hue-rotate-[288deg] before:contrast-[1.02]`}>
        <fieldset className="border-t-[1px] border-slate-300 mt-6 mb-6 ">
            <legend className={`text-white border-black text-[30px] text-left tracking-widest leading-none items-center ml-5 border-double border-8 py-3 px-2 font-bold uppercase`}>
                    <div>d
                    <a className="text-[21px]">Δ</a></div>
                <div>8n</div>
            </legend>
        </fieldset>
        <div className="flex justify-center flex-col gap-y-8 mt-8">
            <div className="self-center">
            <div className="text-6xl pb-8">
                WELCOME!
            </div>
            </div>
            <div className="text-left flex-col gap-y-12 flex">
                <div>
                    <fieldset className="border-t border-slate-300 border-dashed">
                        <legend className="text-lg ml-5 px-2 tracking-widest uppercase">What's This</legend>
                    </fieldset>
                    <div className="text-slate-300 mt-2 tracking-tight leading-relaxed">
                        Well, you might be wondering "what the f-- is this site?". Well, random people on the internet that just happened to came across this site, this is a automated site to list
                        some hyped sneakers' brands mostly based in <a className="font-bold">Indonesia</a>. This website will be updated very fast during the actual release of the sneakers so that u won't miss the sneaker drops and purchases.
                    </div>
                </div>
                <div>
                    <fieldset className="border-t border-slate-300 border-dashed">
                        <legend className="text-lg ml-5 px-2 tracking-widest">NEW RELEASES</legend>
                    </fieldset>
                    <div className="mt-2 text-slate-300 tracking-tight leading-relaxed">
                        Here's a collection of items that are newly released sneakers from your favorite sneaker brands fetched from <a className="font-bold uppercase">Tokopedia</a>;
                    </div>
                </div>
                <DisplayProducts sid="6673471" etalaseId="33026471" name="aerostreet"/>
                <DisplayProducts sid="3067540" etalaseId="etalase" name="patrobas"/>
                <DisplayProducts sid="5433599" etalaseId="etalase" name="compass"/>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}