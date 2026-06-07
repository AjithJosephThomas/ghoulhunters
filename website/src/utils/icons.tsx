import { ClamIcon } from '../components/common/ClamIcon';
import { RiverBridgeIcon } from '../components/common/RiverBridgeIcon';
import BugReportIcon from '@mui/icons-material/BugReport';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import CoffeeIcon from '@mui/icons-material/Coffee';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import MapIcon from '@mui/icons-material/Map';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PestControlIcon from '@mui/icons-material/PestControl';
import RedeemIcon from '@mui/icons-material/Redeem';
import SchemaIcon from '@mui/icons-material/Schema';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { SvgIconComponent } from '@mui/icons-material';

const iconMap: Record<string, SvgIconComponent> = {
  clam: ClamIcon,
  bridge: RiverBridgeIcon,
  river: RiverBridgeIcon,
  pest_control: PestControlIcon,
  bug_report: BugReportIcon,
  coffee: CoffeeIcon,
  checkroom: CheckroomIcon,
  redeem: RedeemIcon,
  emoji_events: EmojiEventsIcon,
  water: WaterDropIcon,
  visibility: VisibilityIcon,
  camera: CameraAltIcon,
  programs: MenuBookIcon,
  how_it_works: GroupsIcon,
  who_we_are: GroupsIcon,
  blueprint: SchemaIcon,
  map: MapIcon,
};

export function getIcon(name: string): SvgIconComponent {
  return iconMap[name] ?? BugReportIcon;
}
