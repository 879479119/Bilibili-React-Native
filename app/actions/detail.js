/**
 * Created by zi on 2016/8/31.
 */

/**
 * 得到详情信息后开始渲染
 * @type {string}
 */

export const READY_TO_RENDER = "READY_TO_RENDER"

export const readyRender = result => disptch => {
	disptch({
		type: READY_TO_RENDER,
		result: result
	})
}