import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const TransitionSuccessDIalog: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="mx-auto max-w-[500px]">
        <DialogHeader>
          <div className="flex  py-8 justify-center flex-col items-center gap-4">
            <img src="/img/success.png" alt="success modal" />
            <h3 className="text-xl lg:text-[1.9rem] text-center font-fredoka-one">
              Transaction Success!
            </h3>
            <p className="text-center text-base mb-6 leading-[110%]  mx-auto max-w-[360px] lg:text-lg font-normal">
              Transaction completed successfully. <br /> Thank you for choosing
              us!
            </p>
            <DialogClose className="bg-[#92DDE7] px-6 lg:px-8 h-12 rounded-[10px]">
              <span className="text-base lg:text-lg font-fredoka-one text-[#1D1F2C]">
                Back to Home
              </span>
            </DialogClose>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TransitionSuccessDIalog;
