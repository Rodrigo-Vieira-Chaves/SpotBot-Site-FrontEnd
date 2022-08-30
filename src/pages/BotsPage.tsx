import { Button } from '../components/Button';
import { OutletBackground } from '../components/OutletBackground';

function BotsPage ()
{
    return (
        <OutletBackground>
            <div className="w-full flex justify-around items-center text-center">
                <div className="w-[15%] text-[#7194FF] font-bold text-2xl">Bot Name</div>
                <div className="w-[15%] text-[#7194FF] font-bold text-2xl">Status</div>
                <div className="w-[15%] text-[#7194FF] font-bold text-2xl">Exchange</div>
                <div className="w-[15%] text-[#7194FF] font-bold text-2xl">Account</div>
                <div className="w-[15%] text-[#7194FF] font-bold text-2xl">Performance Month</div>
                <div className="w-[15%] text-[#7194FF] font-bold text-2xl"></div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-6">
                <div className="w-full flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">joe@ftx.mainaccount</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">ACTIVE</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">FTX</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">Main</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">+0.52%</div>
                    <div className="w-[15%] h-[90px] flex flex-col justify-center items-center gap-2">
                        <Button className="h-1/2 bg-[#DA4C4C]" label="Stop" />
                        <Button className="h-1/2 bg-[#DA4C4C]" label="Stop after Trade" />
                    </div>
                </div>
                <div className="w-full flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">joe@ftx.subaccount2</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">IDLE</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">FTX</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">Sub Account 2</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">+0.31%</div>
                    <div className="w-[15%] h-[90px] flex flex-col justify-center items-center gap-2">
                        <Button className="h-1/2 bg-[#28C724]" label="Start" />
                        <Button className="h-1/2" label="Delete" />
                    </div>
                </div>
                <div className="w-full flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">joe@ftx.subaccount3</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">Stop after trade</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">FTX</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">Sub Account 3</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">+0.1%</div>
                    <div className="w-[15%] h-[90px] flex flex-col justify-center items-center gap-2">
                        <Button className="h-1/2 bg-[#28C724]" label="Active" />
                        <Button className="h-1/2 bg-[#DA4C4C]" label="Stop" />
                    </div>
                </div>
                <div className="w-full flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">joe@ftx.subaccount4</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">Waiting Payment</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">FTX</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">Sub Account 4</div>
                    <div className="w-[15%] h-[90px] font-bold text-base flex justify-center items-center">+0.1%</div>
                    <div className="w-[15%] h-[90px] flex flex-col justify-center items-center gap-2">
                    </div>
                </div>
                <div className="w-24 h-24 bg-[#41525A] rounded-full flex justify-center items-start text-[#7194FF] font-bold text-7xl">+</div>
            </div>
        </OutletBackground>
    );
}

export { BotsPage };
