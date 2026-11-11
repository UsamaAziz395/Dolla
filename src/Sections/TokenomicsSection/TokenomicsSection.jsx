
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

import { tokenomicsChartData } from '../../Data/tokenomicsData';

const renderCustomLabels = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  value,
  payload
}) => {
  const RADIAN = Math.PI / 180;

  const percentRadius = outerRadius * 0.65;

  const percentX = cx + percentRadius * Math.cos(-midAngle * RADIAN);
  const percentY = cy + percentRadius * Math.sin(-midAngle * RADIAN);

  const positions = {
    Team: {
      x: cx - 245,
      y: cy - 110,
      anchor: 'end',
      lineX: cx - 245,
      lineY: cy - 90
    },
    Treasury: {
      x: cx + 245,
      y: cy - 110,
      anchor: 'start',
      lineX: cx + 245,
      lineY: cy - 90
    },
    'Seed Phase': {
      x: cx + 245,
      y: cy + 10,
      anchor: 'start',
      lineX: cx + 245,
      lineY: cy + 30
    },
    Liquidity: {
      x: cx + 210,
      y: cy + 145,
      anchor: 'start',
      lineX: cx + 210,
      lineY: cy + 165
    },
    Airdrop: {
      x: cx - 245,
      y: cy + 145,
      anchor: 'end',
      lineX: cx - 245,
      lineY: cy + 165
    }
  };

  const position = positions[payload.name];

  if (!position) return null;

  const lineStartX =
    cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN);

  const lineStartY =
    cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN);

  const elbowX =
    position.lineX + (lineStartX > position.lineX ? 20 : -20);

  return (
    <g>
      {/* Percentage inside chart */}
      <text
        x={percentX}
        y={percentY}
        fill="#FFFFFF"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="16"
        fontWeight="900"
        stroke="#000000"
        strokeWidth="0.7"
        paintOrder="stroke"
      >
        {value}%
      </text>

      {/* Desktop Side Labels */}
      <g className="hidden md:block">
        <path
          d={`
            M ${lineStartX} ${lineStartY}
            L ${elbowX} ${lineStartY}
            L ${position.lineX} ${position.lineY}
          `}
          fill="none"
          stroke="#A99C8D"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <circle
          cx={lineStartX}
          cy={lineStartY}
          r="2.5"
          fill="#A99C8D"
        />

        <text
          x={position.x}
          y={position.y}
          textAnchor={position.anchor}
          fill="#FFFFFF"
          fontSize="19"
          fontWeight="800"
        >
          {payload.name}
        </text>

        <text
          x={position.x}
          y={position.y + 25}
          textAnchor={position.anchor}
          fill="#96908B"
          fontSize="12"
        >
          Lorem ipsum is placeholder text
        </text>

        <text
          x={position.x}
          y={position.y + 42}
          textAnchor={position.anchor}
          fill="#96908B"
          fontSize="12"
        >
          commonly used in the graphic
        </text>
      </g>
    </g>
  );
};

const TokenomicsSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#1A1614] flex flex-col items-center justify-center py-12 md:py-16 px-4 sm:px-6 font-sans overflow-hidden">

      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl md:text-6xl font-black text-[#F4EDE0] uppercase tracking-tighter mb-8 md:mb-10 text-center relative z-10"
        style={{
          WebkitTextStroke: '1px black',
          textShadow: '3px 3px 0px rgba(166, 124, 82, 0.6)'
        }}
      >
        Tokenomics
      </h2>

      {/* Chart Wrapper */}
      <div className="w-full max-w-[1000px] h-[320px] sm:h-[380px] md:h-[460px] relative flex justify-center">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={tokenomicsChartData}
              cx="50%"
              cy="50%"
              outerRadius="65%"
              dataKey="value"
              stroke="#1A1614"
              strokeWidth={3}
              startAngle={144}
              endAngle={-216}
              label={renderCustomLabels}
              labelLine={false}
              isAnimationActive={true}
            >
              {tokenomicsChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

      </div>

      {/* Mobile Information Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[650px] mt-8 md:hidden">

        {tokenomicsChartData.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-[#241B16] border border-[#8C6E54]/40 rounded-xl p-4"
          >
            <div
              className="w-3 h-3 rounded-full mt-1.5 shrink-0"
              style={{ backgroundColor: item.color }}
            />

            <div className="flex-1 min-w-0">

              <div className="flex items-center justify-between gap-2">
                <h3 className="text-white font-extrabold text-base sm:text-lg">
                  {item.name}
                </h3>

                <span className="text-white font-black text-base">
                  {item.value}%
                </span>
              </div>

              <p className="text-[#96908B] text-xs sm:text-sm leading-relaxed mt-2">
                {item.desc || 'Lorem ipsum is placeholder text commonly used in the graphic.'}
              </p>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default TokenomicsSection;
