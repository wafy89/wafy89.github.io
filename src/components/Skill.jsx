import React from "react";
import cc from "classcat";
import { useGauge } from "use-gauge";

export default function Power(props) {
  const { value , label } = props;
  const gauge = useGauge({
    domain: [0, 100],
    startAngle: 90,
    endAngle: 270,
    numTicks: 21,
    diameter: 200
  });

  const needle = gauge.getNeedleProps({
    value,
    baseRadius: 8,
    tipRadius: 2
  });

  return (
    <div className="p-8 ">
      <svg className=" overflow-visible p-2 w-56" {...gauge.getSVGProps()}>
        <g id="ticks">
          {gauge.ticks.map((angle) => {
            const asValue = gauge.angleToValue(angle);
            const showText = asValue % 20 === 0;

            return (
              <React.Fragment key={`tick-group-${angle}`}>
                <line
                  className={cc([
                    "stroke-gray-300",
                    {
                      "stroke-green-300": asValue <= 20,
                      "stroke-yellow-300": asValue >= 60 && asValue <= 80,
                      "stroke-red-400": asValue >= 80
                    }
                  ])}
                  strokeWidth={2}
                  {...gauge.getTickProps({
                    angle,
                    length: 8
                  })}
                />
                {showText && (
                  <text
                    className="text-sm fill-gray-400 font-medium"
                    {...gauge.getLabelProps({ angle, offset: 20 })}
                  >
                    {asValue}
                  </text>
                )}
              </React.Fragment>
            );
          })}
        </g>
        <g id="needle">
          <circle className="fill-gray-700" {...needle.base} r={12} />
          <circle className="fill-gray-700" {...needle.base} />
          <circle className="fill-gray-700" {...needle.tip} />
          <polyline className="fill-gray-700" points={needle.points} />
          <circle className="fill-white" {...needle.base} r={4} />
        </g>
      </svg>
			<h4 className="bg-primary-yellow-light mt-1 drop-shadow-lg dark:bg-primary-yellow w-[184px] mx-auto rounded-b-xl text-slate-600  text-xl">{label}</h4>
    </div>
  );
}

