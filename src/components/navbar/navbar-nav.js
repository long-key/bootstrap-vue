import { defineComponent, h, mergeProps } from '../../vue'
import { NAME_NAVBAR_NAV } from '../../constants/components'
import { makePropsConfigurable } from '../../utils/config'
import { pluckProps } from '../../utils/props'
import { props as BNavProps } from '../nav/nav'

// --- Helper methods ---

const computeJustifyContent = value => {
  // Normalize value
  value = value === 'left' ? 'start' : value === 'right' ? 'end' : value
  return `justify-content-${value}`
}

// --- Props ---

export const props = makePropsConfigurable(
  pluckProps(['tag', 'fill', 'justified', 'align', 'small'], BNavProps),
  NAME_NAVBAR_NAV
)

// --- Main component ---
// @vue/component
export const BNavbarNav = /*#__PURE__*/ defineComponent({
  name: NAME_NAVBAR_NAV,
  functional: true,
  props,
  render(_, { props, data, children }) {
    return h(
      props.tag,
      mergeProps(data, {
        staticClass: 'navbar-nav',
        class: {
          'nav-fill': props.fill,
          'nav-justified': props.justified,
          [computeJustifyContent(props.align)]: props.align,
          small: props.small
        }
      }),
      children
    )
  }
})
