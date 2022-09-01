import { Button } from '../components/Button';
import { OutletBackground } from '../components/OutletBackground';

function BotsPage ()
{
    return (
        <OutletBackground className="overflow-y-auto leading-[100%] gap-6">
            <div className="w-full flex justify-around items-center text-center">
                <div className="w-[15%] h-full text-[#7194FF] font-bold text-[0.625rem] sm:text-base lg:text-2xl break-words">Bot Name</div>
                <div className="w-[15%] h-full text-[#7194FF] font-bold text-[0.625rem] sm:text-base lg:text-2xl break-words">Status</div>
                <div className="w-[15%] h-full text-[#7194FF] font-bold text-[0.625rem] sm:text-base lg:text-2xl break-words">Exchange</div>
                <div className="w-[15%] h-full text-[#7194FF] font-bold text-[0.625rem] sm:text-base lg:text-2xl break-words">Account</div>
                <div className="w-[15%] h-full text-[#7194FF] font-bold text-[0.625rem] sm:text-base lg:text-2xl break-words">Profit</div>
                <div className="w-[15%] h-full"></div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-3">
                <div className="w-full h-24 flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-all">joe@ftx.mainaccount</div>
                    <div className="w-[15%] h-full font-bold text-[#28C724] text-[0.625rem] sm:text-base flex justify-center items-center break-words">ACTIVE</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-words">FTX</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-words">Main</div>
                    <div className="w-[15%] h-full font-bold text-[#28C724] text-[0.625rem] sm:text-base flex justify-center items-center break-all">+0.52%</div>
                    <div className="w-[15%] h-full flex flex-col justify-center items-center gap-2">
                        <Button className="w-full h-1/2 bg-[#DA4C4C] text-[0.625rem] sm:text-base leading-[100%] p-1" label="Stop" />
                        <Button className="w-full h-1/2 bg-[#DA4C4C] text-[0.625rem] sm:text-base leading-[100%] p-1" label="Stop after Trade" />
                    </div>
                </div>
                <div className="w-full h-24  flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-all">joe@ftx.subaccount2</div>
                    <div className="w-[15%] h-full font-bold text-[#DA4C4C] text-[0.625rem] sm:text-base flex justify-center items-center break-words">IDLE</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-words">FTX</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-words">Sub Account 2</div>
                    <div className="w-[15%] h-full font-bold text-[#28C724]  text-[0.625rem] sm:text-base flex justify-center items-center break-all">+13.52%</div>
                    <div className="w-[15%] h-full flex flex-col justify-center items-center gap-2">
                        <Button className="w-full h-1/2 bg-[#28C724] text-[0.625rem] sm:text-base leading-[100%] p-1" label="Start" />
                        <Button className="w-full h-1/2 text-[0.625rem] sm:text-base leading-[100%] p-1" label="Delete" />
                    </div>
                </div>
                <div className="w-full h-24  flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-all">joe@ftx.subaccount3</div>
                    <div className="w-[15%] h-full font-bold text-[#DA4C4C] text-[0.625rem] sm:text-base flex justify-center items-center break-words">Stop after trade</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-words">FTX</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-words">Sub Account 3</div>
                    <div className="w-[15%] h-full font-bold text-[#28C724]  text-[0.625rem] sm:text-base flex justify-center items-center break-all">+0.1%</div>
                    <div className="w-[15%] h-full flex flex-col justify-center items-center gap-2">
                        <Button className="w-full h-1/2 bg-[#28C724] text-[0.625rem] sm:text-base leading-[100%] p-1" label="Active" />
                        <Button className="w-full h-1/2 bg-[#DA4C4C] text-[0.625rem] sm:text-base leading-[100%] p-1" label="Stop" />
                    </div>
                </div>
                <div className="w-full h-24  flex justify-around items-center text-center bg-[#41525A] p-2.5">
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-all">joe@ftx.subaccount4</div>
                    <div className="w-[15%] h-full font-bold text-[0.625rem] sm:text-base flex justify-center items-center break-words">Waiting Payment</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-words">FTX</div>
                    <div className="w-[15%] h-full text-[0.625rem] sm:text-base flex justify-center items-center break-words">Sub Account 4</div>
                    <div className="w-[15%] h-full font-bold text-[#28C724]  text-[0.625rem] sm:text-base flex justify-center items-center break-all">+0.1%</div>
                    <div className="w-[15%] h-full flex flex-col justify-center items-center gap-2">
                    </div>
                </div>
                <div className="w-24 h-24 bg-[#41525A] rounded-full flex justify-center items-start text-[#7194FF] font-bold text-7xl">+</div>
            </div>
        </OutletBackground>
    );
}

export { BotsPage };
