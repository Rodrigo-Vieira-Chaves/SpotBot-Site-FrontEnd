import { BillingHeader } from '../components/Tables/BillingHeader';
import { Button } from '../components/Button';
import { OutletBackground } from '../components/OutletBackground';

function BillingPage ()
{
    return (
        <OutletBackground className="overflow-y-auto leading-[100%] gap-6">
            <BillingHeader />
            <div className="w-full flex flex-col justify-center items-center gap-3">
                <div className="w-full h-24 flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-all">#1</div>
                    <div className="w-[15%] h-full font-bold text-[#28C724] text-[0.625rem] sm:text-base flex justify-center items-center break-words">PAID</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-words">Jan/2022</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-words">04 Feb</div>
                    <div className="w-[15%] h-full font-bold text-[0.625rem] sm:text-base flex justify-center items-center break-all">$ 0.52</div>
                    <div className="w-[15%] h-full flex flex-col justify-center items-center gap-2"></div>
                </div>
                <div className="w-full h-24 flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-all">#2</div>
                    <div className="w-[15%] h-full font-bold text-[#DA4C4C] text-[0.625rem] sm:text-base flex justify-center items-center break-words">NOT PAID</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-words">Feb/2022</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-words">04 Mar</div>
                    <div className="w-[15%] h-full font-bold text-[0.625rem] sm:text-base flex justify-center items-center break-all">$ 1.87</div>
                    <div className="w-[15%] h-full flex flex-col justify-center items-center gap-2">
                        <Button className="w-full h-1/2 bg-[#28C724] text-[0.625rem] sm:text-base leading-[100%] p-1" label="Pay" />
                    </div>
                </div>
                <div className="w-full h-24 flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-all">#3</div>
                    <div className="w-[15%] h-full font-bold text-[0.625rem] sm:text-base flex justify-center items-center break-words">Waiting Payment</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-words">Mar/2022</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-all">04 April</div>
                    <div className="w-[15%] h-full font-bold text-[0.625rem] sm:text-base flex justify-center items-center break-all">$ 2.50</div>
                    <div className="w-[15%] h-full flex flex-col justify-center items-center gap-2">
                        <Button className="w-full h-1/2 bg-[#28C724] text-[0.625rem] sm:text-base leading-[100%] p-1" label="Pay" />
                    </div>
                </div>
            </div>
        </OutletBackground>
    );
}

export { BillingPage };
