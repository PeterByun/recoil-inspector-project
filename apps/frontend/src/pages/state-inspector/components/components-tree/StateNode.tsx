import { Group } from '@visx/group';

const lightpurple = '#374469';
const plum = '#c63af9';
const white = '#ffffff';
export const background = '#272b4d';

type RecoilStateNodeProps = {
  node: {
    x: number;
    y: number;
    data: {
      name: string;
    };
  };
};

export function RecoilStateNode({
  node,
  onMouseEnter,
  onMouseLeave,
}: RecoilStateNodeProps & {
  onMouseEnter: (
    event: React.MouseEvent<SVGGElement, MouseEvent>,
    data: {
      x: number;
      y: number;
      data: {
        name: string;
      };
    }
  ) => void;
  onMouseLeave: () => void;
}) {
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;

  return (
    <Group top={node.y} left={node.x}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={background}
        stroke={plum}
        strokeWidth={1}
        rx={10}
        onMouseEnter={(e) => {
          onMouseEnter(e, node);
        }}
        onMouseLeave={onMouseLeave}
      />
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        fill={white}
        style={{ pointerEvents: 'none' }}
      >
        {node.data.name}
      </text>
    </Group>
  );
}