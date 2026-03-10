import {easeIn} from "framer-motion";

const transition = {duration: 1, ease: [0.76, 0, 0.24, 1] as const}
export const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {duration: 0.35}
  },
  exit: {
    opacity: 0,
    transition: {duration: 0.35}
  }
}

export const height = {
  initial: {
    height: 0
  },
  enter: {
    height: "350px",
    transition
  },
  exit: {
    height: 0,
    transition
  }
}

export const expand = {
  initial: {
    height: 0
  },
  enter: {
    height: "auto",
    transition: {duration: 0.35}
  },
  exit: {
    height: 0,
    transition: {duration: 0.35}
  }
}

export const width = {
  initial: {
    width: 0
  },
  enter: {
    width: "auto",
    transition: {duration: 0.35}
  },
  exit: {
    width: 0,
    transition: {duration: 0.35}
  }
}

export const blur = {
  initial: {
    filter: "blur(0px)",
    opacity: 1
  },
  enter: {
    filter: "blur(4px)",
    opacity: 0.6,
    transition: {duration: 0.3}
  },
  exit: {
    filter: "blur(0px)",
    opacity: 1,
    transition: {duration: 0.3}

  }
}

export const translate = {
  initial: {
    y: "100%",
    opacity: 0
  },
  enter: (i: number[]) => ({
    y: 0,
    opacity: 1,
    transition: {duration: 1, ease: [0.76, 0, 0.24, 1] as const, delay: i[0]}
  }),
  exit: (i: number[]) => ({
    y: "100%",
    opacity: 0,
    transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1] as const, delay: i[1]}
  })
}

export const scaleX = {
  initial: {
    scaleX: 0,
    originX: 0.5
  },
  enter: {
    scaleX: 1,
    transition: {duration: 1.5, ease: easeIn, delay: 0.5}
  },
  exit: {
    scaleX: 0,
    transition: {duration: 1.5, ease: easeIn, delay: 0.5}
  }
}

export const scaleY = {
  initial: {
    scaleY: 0,
    originY: 0.5
  },
  enter: {
    scaleY: 1,
    transition: {duration: 1.5, ease: easeIn, delay: 0.5}
  },
  exit: {
    scaleY: 0,
    transition: {duration: 1.5, ease: easeIn, delay: 0.5}
  }
}

export const rotate = {
  initial: {
    rotate: 0,
  },
  enter: {
    rotate: -45,
    transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1] as const}
  },
  exit: {
    rotate: 0,
    transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1] as const}
  }
}

export const rotateTopLine = {
  initial: {
    rotate: 0,
  },
  enter: {
    rotate: 20,
    transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1] as const}
  }, exit: {
    rotate: 0,
    transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1] as const}
  }
}

export const rotateBottomLine = {
  initial: {
    rotate: 0,
  },
  enter: {
    rotate: -20,
    transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1] as const}
  }, exit: {
    rotate: 0,
    transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1] as const}
  }
}