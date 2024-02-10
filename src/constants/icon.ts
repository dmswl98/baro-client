import Add from '@assets/icons/add.svg';
import Archive from '@assets/icons/archive.svg';
import ArrowDown from '@assets/icons/arrowDown.svg';
import Bookmark from '@assets/icons/bookmark.svg';
import BookmarkHeader from '@assets/icons/bookmarkHeader.svg';
import BookmarkRefer from '@assets/icons/bookmarkRefer.svg';
import Clock from '@assets/icons/clock.svg';
import Close from '@assets/icons/close.svg';
import Complete from '@assets/icons/complete.svg';
import Copy from '@assets/icons/copy.svg';
import Google from '@assets/icons/google.svg';
import Instagram from '@assets/icons/instagram.svg';
import Kakao from '@assets/icons/kakao.svg';
import Logo32 from '@assets/icons/logo32.svg';
import Logout from '@assets/icons/logout.svg';
import Menu from '@assets/icons/menu.svg';
import Naver from '@assets/icons/naver.svg';
import PencilActive from '@assets/icons/pencil-active.svg';
import PencilDefault from '@assets/icons/pencil-default.svg';
import Picture from '@assets/icons/picture.svg';
import Profle from '@assets/icons/profile.svg';
import ProfileDialog from '@assets/icons/profileDialog.svg';
import ProfileHeader from '@assets/icons/profileHeader.svg';
import Setting from '@assets/icons/setting.svg';
import Spelling from '@assets/icons/spelling.svg';
import Submit from '@assets/icons/submit.svg';
import TemplateActive from '@assets/icons/template-active.svg';
import TemplateDefault from '@assets/icons/template-default.svg';

export const iconFactory = {
  add: Add,
  archive: Archive,
  arrowDown: ArrowDown,
  bookmark: Bookmark,
  bookmarkHeader: BookmarkHeader,
  bookmarkRefer: BookmarkRefer,
  clock: Clock,
  close: Close,
  complete: Complete,
  copy: Copy,
  google: Google,
  instagram: Instagram,
  kakao: Kakao,
  logo32: Logo32,
  logout: Logout,
  menu: Menu,
  naver: Naver,
  pencilActive: PencilActive,
  pencilDefault: PencilDefault,
  profile: Profle,
  profileDialog: ProfileDialog,
  profileHeader: ProfileHeader,
  setting: Setting,
  spelling: Spelling,
  submit: Submit,
  templateActive: TemplateActive,
  templateDefault: TemplateDefault,
  picture: Picture,
};

export type Icons = keyof typeof iconFactory;
