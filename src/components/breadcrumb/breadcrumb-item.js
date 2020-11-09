import { defineComponent, h, mergeProps } from '../../vue'
import { NAME_BREADCRUMB_ITEM } from '../../constants/components'
import { makePropsConfigurable } from '../../utils/config'
import { BBreadcrumbLink, props } from './breadcrumb-link'

// @vue/component
export const BBreadcrumbItem = /*#__PURE__*/ defineComponent({
  name: NAME_BREADCRUMB_ITEM,
  functional: true,
  props: makePropsConfigurable(props, NAME_BREADCRUMB_ITEM),
  render(_, { props, data, children }) {
    return h(
      'li',
      mergeProps(data, {
        staticClass: 'breadcrumb-item',
        class: { active: props.active }
      }),
      [h(BBreadcrumbLink, { props }, children)]
    )
  }
})
