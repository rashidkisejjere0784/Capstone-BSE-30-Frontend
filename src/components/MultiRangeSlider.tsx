import React, { useCallback, useEffect, useState, useRef } from "react";

interface MultiRangeSliderProps {
    min: number;
    max: number;
    onChange: ({ min, max }: { min: number; max: number }) => void;
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <div className="h-fit flex items-center justify-center relative">
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={(event) => {
                    const value = Math.min(+event.target.value, maxVal - 1);
                    setMinVal(value);
                    event.target.value = value.toString();
                }}
                className={`pointer-events-none absolute h-0 w-52 outline-none ${
                    minVal > max - 100 ? "z-[5]" : "z-[3]"
                }`}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={(event) => {
                    const value = Math.max(+event.target.value, minVal + 1);
                    setMaxVal(value);
                    event.target.value = value.toString();
                }}
                className="pointer-events-none absolute h-0 w-52 outline-none z-10"
            />

            <div className="relative w-52">
                <div className="absolute w-full h-1 rounded bg-gray-300 z-[1]" />
                <div ref={range} className="absolute h-1 rounded bg-primary-500 z-[2]" />
                <div className="absolute left-1 top-6 text-xs text-gray-400">{minVal}</div>
                <div className="absolute right-1 top-6 text-xs text-gray-400">{maxVal}</div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;
