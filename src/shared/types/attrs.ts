import type {
  AnchorHTMLAttributes,
  AreaHTMLAttributes,
  AudioHTMLAttributes,
  BaseHTMLAttributes,
  BlockquoteHTMLAttributes,
  ButtonHTMLAttributes,
  CanvasHTMLAttributes,
  ColgroupHTMLAttributes,
  ColHTMLAttributes,
  DataHTMLAttributes,
  DelHTMLAttributes,
  DetailsHTMLAttributes,
  DialogHTMLAttributes,
  EmbedHTMLAttributes,
  FieldsetHTMLAttributes,
  FormHTMLAttributes,
  HTMLAttributes as HTMLAttributesType,
  HtmlHTMLAttributes,
  IframeHTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  InsHTMLAttributes,
  KeygenHTMLAttributes,
  LabelHTMLAttributes,
  LiHTMLAttributes,
  LinkHTMLAttributes,
  MapHTMLAttributes,
  MenuHTMLAttributes,
  MetaHTMLAttributes,
  MeterHTMLAttributes,
  ObjectHTMLAttributes,
  OlHTMLAttributes,
  OptgroupHTMLAttributes,
  OptionHTMLAttributes,
  OutputHTMLAttributes,
  ParamHTMLAttributes,
  ProgressHTMLAttributes,
  QuoteHTMLAttributes,
  SelectHTMLAttributes,
  SourceHTMLAttributes,
  SVGAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  TextareaHTMLAttributes,
  ThHTMLAttributes,
  TimeHTMLAttributes,
  TrackHTMLAttributes,
  VideoHTMLAttributes,
} from 'vue';

interface DefinedIntrinsicElements {
  // HTML

  a: AnchorHTMLAttributes;

  abbr: HTMLAttributesType;

  address: HTMLAttributesType;

  area: AreaHTMLAttributes;

  article: HTMLAttributesType;

  aside: HTMLAttributesType;

  audio: AudioHTMLAttributes;

  b: HTMLAttributesType;

  base: BaseHTMLAttributes;

  bdi: HTMLAttributesType;

  bdo: HTMLAttributesType;

  big: HTMLAttributesType;

  blockquote: BlockquoteHTMLAttributes;

  body: HTMLAttributesType;

  br: HTMLAttributesType;

  button: ButtonHTMLAttributes;

  canvas: CanvasHTMLAttributes;

  caption: HTMLAttributesType;

  cite: HTMLAttributesType;

  code: HTMLAttributesType;

  col: ColHTMLAttributes;

  colgroup: ColgroupHTMLAttributes;

  data: DataHTMLAttributes;

  datalist: HTMLAttributesType;

  dd: HTMLAttributesType;

  del: DelHTMLAttributes;

  details: DetailsHTMLAttributes;

  dfn: HTMLAttributesType;

  dialog: DialogHTMLAttributes;

  div: HTMLAttributesType;

  dl: HTMLAttributesType;

  dt: HTMLAttributesType;

  em: HTMLAttributesType;

  embed: EmbedHTMLAttributes;

  fieldset: FieldsetHTMLAttributes;

  figcaption: HTMLAttributesType;

  figure: HTMLAttributesType;

  footer: HTMLAttributesType;

  form: FormHTMLAttributes;

  h1: HTMLAttributesType;

  h2: HTMLAttributesType;

  h3: HTMLAttributesType;

  h4: HTMLAttributesType;

  h5: HTMLAttributesType;

  h6: HTMLAttributesType;

  head: HTMLAttributesType;

  header: HTMLAttributesType;

  hgroup: HTMLAttributesType;

  hr: HTMLAttributesType;

  html: HtmlHTMLAttributes;

  i: HTMLAttributesType;

  iframe: IframeHTMLAttributes;

  img: ImgHTMLAttributes;

  input: InputHTMLAttributes;

  ins: InsHTMLAttributes;

  kbd: HTMLAttributesType;

  keygen: KeygenHTMLAttributes;

  label: LabelHTMLAttributes;

  legend: HTMLAttributesType;

  li: LiHTMLAttributes;

  link: LinkHTMLAttributes;

  main: HTMLAttributesType;

  map: MapHTMLAttributes;

  mark: HTMLAttributesType;

  menu: MenuHTMLAttributes;

  menuitem: HTMLAttributesType;

  meta: MetaHTMLAttributes;

  meter: MeterHTMLAttributes;

  nav: HTMLAttributesType;

  noscript: HTMLAttributesType;

  object: ObjectHTMLAttributes;

  ol: OlHTMLAttributes;

  optgroup: OptgroupHTMLAttributes;

  option: OptionHTMLAttributes;

  output: OutputHTMLAttributes;

  p: HTMLAttributesType;

  param: ParamHTMLAttributes;

  picture: HTMLAttributesType;

  pre: HTMLAttributesType;

  progress: ProgressHTMLAttributes;

  q: QuoteHTMLAttributes;

  rp: HTMLAttributesType;

  rt: HTMLAttributesType;

  ruby: HTMLAttributesType;

  s: HTMLAttributesType;

  samp: HTMLAttributesType;

  section: HTMLAttributesType;

  select: SelectHTMLAttributes;

  small: HTMLAttributesType;

  source: SourceHTMLAttributes;

  span: HTMLAttributesType;

  strong: HTMLAttributesType;

  sub: HTMLAttributesType;

  summary: HTMLAttributesType;

  sup: HTMLAttributesType;

  table: TableHTMLAttributes;

  tbody: HTMLAttributesType;

  td: TdHTMLAttributes;

  textarea: TextareaHTMLAttributes;

  tfoot: HTMLAttributesType;

  th: ThHTMLAttributes;

  thead: HTMLAttributesType;

  time: TimeHTMLAttributes;

  title: HTMLAttributesType;

  tr: HTMLAttributesType;

  track: TrackHTMLAttributes;

  u: HTMLAttributesType;

  ul: HTMLAttributesType;

  var: HTMLAttributesType;

  video: VideoHTMLAttributes;

  wbr: HTMLAttributesType;

  // SVG

  svg: SVGAttributes;

  animate: SVGAttributes;

  circle: SVGAttributes;

  clipPath: SVGAttributes;

  defs: SVGAttributes;

  desc: SVGAttributes;

  ellipse: SVGAttributes;

  feBlend: SVGAttributes;

  feColorMatrix: SVGAttributes;

  feComponentTransfer: SVGAttributes;

  feComposite: SVGAttributes;

  feConvolveMatrix: SVGAttributes;

  feDiffuseLighting: SVGAttributes;

  feDisplacementMap: SVGAttributes;

  feDistantLight: SVGAttributes;

  feFlood: SVGAttributes;

  feFuncA: SVGAttributes;

  feFuncB: SVGAttributes;

  feFuncG: SVGAttributes;

  feFuncR: SVGAttributes;

  feGaussianBlur: SVGAttributes;

  feImage: SVGAttributes;

  feMerge: SVGAttributes;

  feMergeNode: SVGAttributes;

  feMorphology: SVGAttributes;

  feOffset: SVGAttributes;

  fePointLight: SVGAttributes;

  feSpecularLighting: SVGAttributes;

  feSpotLight: SVGAttributes;

  feTile: SVGAttributes;

  feTurbulence: SVGAttributes;

  filter: SVGAttributes;

  foreignObject: SVGAttributes;

  g: SVGAttributes;

  image: SVGAttributes;

  line: SVGAttributes;

  linearGradient: SVGAttributes;

  marker: SVGAttributes;

  mask: SVGAttributes;

  metadata: SVGAttributes;

  path: SVGAttributes;

  pattern: SVGAttributes;

  polygon: SVGAttributes;

  polyline: SVGAttributes;

  radialGradient: SVGAttributes;

  rect: SVGAttributes;

  stop: SVGAttributes;

  switch: SVGAttributes;

  symbol: SVGAttributes;

  text: SVGAttributes;

  textPath: SVGAttributes;

  tspan: SVGAttributes;

  use: SVGAttributes;

  view: SVGAttributes;
}

export type HTMLTag = keyof DefinedIntrinsicElements;

export type HTMLAttributes<Tag extends HTMLTag> = DefinedIntrinsicElements[Tag];
