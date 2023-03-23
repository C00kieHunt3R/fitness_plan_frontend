import {Injectable, OnInit} from "@angular/core";
import {boltIcon, ClarityIcons, userIcon} from "@cds/core/icon";

@Injectable()
export class IconsService {
  constructor() {
    ClarityIcons.addIcons(boltIcon, userIcon);
    ClarityIcons.addIcons(['nutrition', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,4a3,3,0,0,0-3-3H6a2.992,2.992,0,0,0-.827,5.87L5,7a5.026,5.026,0,0,0-2,4v9a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V11a5.026,5.026,0,0,0-2-4h0l-.173-.13A3,3,0,0,0,21,4ZM19,20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V18H19Zm0-8v4H5V12ZM5.194,10a2.994,2.994,0,0,1,1-1.4L8.333,7h7.334L17.8,8.6A2.989,2.989,0,0,1,18.806,10ZM18,5H6A1,1,0,0,1,6,3H18a1,1,0,0,1,0,2Z"/></svg>'])
    ClarityIcons.addIcons(['exercise', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,11H21V8a3,3,0,0,0-6,0v3H9V8A3,3,0,0,0,3,8v3H2a1,1,0,0,0,0,2H3v3a3,3,0,0,0,6,0V13h6v3a3,3,0,0,0,6,0V13h1a1,1,0,0,0,0-2ZM7,16a1,1,0,0,1-2,0V8A1,1,0,0,1,7,8Zm12,0a1,1,0,0,1-2,0V8a1,1,0,0,1,2,0Z"/></svg>']);
    ClarityIcons.addIcons(['run', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.481,14.068l-2.2-6.585a1,1,0,0,0-.949-.683,4.865,4.865,0,0,1-2.893-.907A7.623,7.623,0,0,1,13.976,2.78a1,1,0,0,0-1.683-.487l-6,6a1,1,0,0,0,.016,1.43l12.537,12a1,1,0,0,0,1.4-.016L21.9,20.049a3.75,3.75,0,0,0,0-5.3A1.751,1.751,0,0,1,21.481,14.068Zm-.992,4.567-.967.967L8.43,8.984,12.544,4.87A7.358,7.358,0,0,0,14.03,7.307,6.076,6.076,0,0,0,17.6,8.757L19.583,14.7a3.778,3.778,0,0,0,.906,1.464A1.75,1.75,0,0,1,20.489,18.635ZM1,17a1,1,0,0,1,1-1h8a1,1,0,0,1,0,2H2A1,1,0,0,1,1,17Zm0-4a1,1,0,0,1,1-1H6a1,1,0,0,1,0,2H2A1,1,0,0,1,1,13Zm0,8a1,1,0,0,1,1-1H14a1,1,0,0,1,0,2H2A1,1,0,0,1,1,21Z"/></svg>']);
    ClarityIcons.addIcons(['logo', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs><style>.cls-1{fill:#ec5b25;}.cls-2{fill:#fff;}.cls-3{fill:#010101;opacity:0.13;}</style></defs><title>Recurso 23</title><g id="Capa_2" data-name="Capa 2"><g id="Layer_2" data-name="Layer 2"><path class="cls-1" d="M50,25c0,.83,0,1.64-.12,2.44,0,.32-.07.64-.11,1A25,25,0,0,1,26.86,49.93c-.36,0-.72,0-1.09.06H25A25,25,0,1,1,50,25Z"/><path class="cls-2" d="M29,20.68a1.29,1.29,0,0,0,0-1.82l-5.13-5.13a1.29,1.29,0,0,0-1.82,0l-.57.57a1.27,1.27,0,0,0-.31.52l-.4-.4a1.46,1.46,0,0,0-2.08,0l-.77.77a1.48,1.48,0,0,0,0,2.08l2.34,2.35-7.13,7.13L10.83,24.4a1.48,1.48,0,0,0-2.08,0L8,25.17a1.47,1.47,0,0,0,0,2.09l.4.4a1.3,1.3,0,0,0-.53.31l-.56.56a1.29,1.29,0,0,0,0,1.82l5.13,5.13a1.28,1.28,0,0,0,1.82,0l.57-.56a1.27,1.27,0,0,0,.31-.52l.4.4a1.48,1.48,0,0,0,1,.43,1.51,1.51,0,0,0,1-.43l.77-.77a1.49,1.49,0,0,0,0-2.09L16,29.6l7.13-7.13,2.34,2.34a1.46,1.46,0,0,0,1,.44,1.45,1.45,0,0,0,1-.44l.77-.77a1.45,1.45,0,0,0,0-2.08l-.39-.4a1.27,1.27,0,0,0,.52-.31ZM14.31,34.42l-.56.57a.59.59,0,0,1-.83,0L7.78,29.86a.6.6,0,0,1,0-.83l.57-.57a.6.6,0,0,1,.83,0L11.75,31l2.56,2.56A.59.59,0,0,1,14.31,34.42Zm3.57-2a.77.77,0,0,1,0,1.09l-.78.77a.77.77,0,0,1-1.09,0l-3.77-3.77L8.47,26.76a.77.77,0,0,1,0-1.09l.77-.77a.8.8,0,0,1,.55-.23.78.78,0,0,1,.55.23ZM28.09,23a.73.73,0,0,1-.23.54l-.77.78a.77.77,0,0,1-1.09,0l-7.54-7.54a.77.77,0,0,1,0-1.09l.77-.78a.79.79,0,0,1,1.09,0l7.54,7.55A.73.73,0,0,1,28.09,23Zm-.94-2.24L22,15.62a.59.59,0,0,1,0-.83l.57-.56a.57.57,0,0,1,.82,0l5.14,5.13a.6.6,0,0,1,0,.83l-.57.57A.6.6,0,0,1,27.15,20.76Z"/><path class="cls-2" d="M41.84,22.28a1.29,1.29,0,0,0,0-1.82l-5.13-5.13a1.29,1.29,0,0,0-1.82,0l-.57.57a1.27,1.27,0,0,0-.31.52l-.4-.4a1.46,1.46,0,0,0-2.08,0l-.77.77a1.48,1.48,0,0,0,0,2.08l2.34,2.34L26,28.35,23.63,26a1.47,1.47,0,0,0-2.08,0l-.77.77a1.47,1.47,0,0,0,0,2.09l.4.4a1.21,1.21,0,0,0-.52.31l-.57.56a1.28,1.28,0,0,0,0,1.82l5.13,5.13a1.28,1.28,0,0,0,1.82,0l.57-.56a1.27,1.27,0,0,0,.31-.52l.4.4a1.48,1.48,0,0,0,1,.43,1.51,1.51,0,0,0,1-.43l.77-.78a1.46,1.46,0,0,0,0-2.08L28.83,31.2,36,24.07l2.34,2.34a1.47,1.47,0,0,0,2.08,0l.78-.77a1.47,1.47,0,0,0,0-2.08l-.4-.4a1.27,1.27,0,0,0,.52-.31ZM27.11,36l-.56.57a.59.59,0,0,1-.83,0l-5.14-5.13a.61.61,0,0,1-.17-.42.58.58,0,0,1,.17-.41l.57-.57a.6.6,0,0,1,.83,0l5.13,5.13A.59.59,0,0,1,27.11,36Zm3.57-2a.77.77,0,0,1,0,1.09l-.78.77a.77.77,0,0,1-1.09,0l-1.2-1.2-5.14-5.13-1.2-1.21a.77.77,0,0,1,0-1.09l.78-.77a.75.75,0,0,1,1.08,0l3.78,3.77,1.18,1.18ZM40.89,24.6a.73.73,0,0,1-.23.54l-.77.78a.77.77,0,0,1-1.09,0l-2.59-2.59h0L35,22.15l-3.78-3.77a.77.77,0,0,1,0-1.09l.78-.78a.77.77,0,0,1,1.09,0l7.54,7.54A.76.76,0,0,1,40.89,24.6ZM40,22.36l-5.13-5.14a.59.59,0,0,1,0-.83l.56-.56a.59.59,0,0,1,.42-.18.55.55,0,0,1,.41.18L41.35,21a.59.59,0,0,1,0,.83l-.57.57A.6.6,0,0,1,40,22.36Z"/><path class="cls-3" d="M49.77,28.4A25,25,0,0,1,26.86,49.93L12.42,35.48a1.36,1.36,0,0,0,.43.29,1.32,1.32,0,0,0,.48.09,1.41,1.41,0,0,0,.49-.09,1.32,1.32,0,0,0,.42-.29l.57-.56a1.27,1.27,0,0,0,.31-.52l.4.4a1.48,1.48,0,0,0,1,.43,1.51,1.51,0,0,0,1-.43l.77-.78a1.48,1.48,0,0,0,0-2.08L16,29.6l7.13-7.13,2.34,2.34a1.48,1.48,0,0,0,1,.44,1.45,1.45,0,0,0,1-.44l.77-.77a1.45,1.45,0,0,0,0-2.08l-.39-.4a1.1,1.1,0,0,0,.4-.21l.12-.1.56-.57h0a1.29,1.29,0,0,0,0-1.82l3.21,3.21L26,28.35,23.63,26a1.47,1.47,0,0,0-2.08,0l-.77.77a1.46,1.46,0,0,0,0,2.08l.4.41a1.21,1.21,0,0,0-.52.31l-.57.56h0a1.31,1.31,0,0,0-.38.91,1.3,1.3,0,0,0,.38.91l5.13,5.13a1.28,1.28,0,0,0,1.82,0l.57-.57a1.17,1.17,0,0,0,.31-.51l.4.4a1.48,1.48,0,0,0,1,.43,1.51,1.51,0,0,0,1-.43l.77-.78a1.46,1.46,0,0,0,0-2.08L28.83,31.2,36,24.07l2.34,2.34a1.37,1.37,0,0,0,.62.37,1.52,1.52,0,0,0,.42.06,1.47,1.47,0,0,0,.42-.06,1.37,1.37,0,0,0,.62-.37l.78-.77a1.5,1.5,0,0,0,.43-1,1.48,1.48,0,0,0-.43-1l-.4-.4h0a1.39,1.39,0,0,0,.52-.31l.56-.57a1.27,1.27,0,0,0,.36-1.13s0-.06,0-.09v0l0-.08a.86.86,0,0,0-.11-.24L42,20.62h0a.21.21,0,0,0-.06-.08Z"/></g></g></svg>'])
  }
}
