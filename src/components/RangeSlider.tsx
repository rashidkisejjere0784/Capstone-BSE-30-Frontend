import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import {ComponentProps} from "react";

type SliderProps = ComponentProps<typeof Slider>

export function RangeSlider({ className, ...props }: SliderProps) {
    return (
        <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[60%]", className)}
            {...props}
        />
    )
}
export default RangeSlider