import { Button } from '../components/Button';
import { OutletBackground } from '../components/OutletBackground';

function BillingPage ()
{
    return (
        <OutletBackground>
            <div className="w-full flex justify-around items-center text-center">
                <div className="w-[15%] text-[#7194FF] font-bold text-2xl">ID</div>
                <div className="w-[15%] text-[#7194FF] font-bold text-2xl">Status</div>
                <div className="w-[15%] text-[#7194FF] font-bold text-2xl">Month/Year</div>
                <div className="w-[15%] text-[#7194FF] font-bold text-2xl">Due Date</div>
                <div className="w-[15%] text-[#7194FF] font-bold text-2xl">Invoice Value</div>
                <div className="w-[15%] text-[#7194FF] font-bold text-2xl"></div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-6">
                <div className="w-full flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">#1</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">PAID</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">2022 Jan</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">04/01/2022</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">$ 0.52</div>
                    <div className="w-[15%] h-[90px] flex flex-col justify-center items-center gap-2"></div>
                </div>
                <div className="w-full flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">#2</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">NOT PAID</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">2022 Feb</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">04/02/2022</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">$ 1.87</div>
                    <div className="w-[15%] h-[90px] flex flex-col justify-center items-center gap-2">
                        <Button className="h-1/2 bg-[#28C724]" label="Pay" />
                    </div>
                </div>
                <div className="w-full flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">#3</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">Waiting Payment</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">2022 Mar</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">04/02/2022</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">$ 2.50</div>
                    <div className="w-[15%] h-[90px] flex flex-col justify-center items-center gap-2">
                        <Button className="h-1/2 bg-[#28C724]" label="Pay" />
                    </div>
                </div>
            </div>
        </OutletBackground>
    );
}

export { BillingPage };
