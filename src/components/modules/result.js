/*액션 타입*/

// 버튼을 누를 때마다 기준에 따라 push
const PUSH_RESULT = 'result/PUSH_RESULT'

// 뒤로가기를 누를 때마다 타입 pop
const POP_RESULT = 'result/POP_RESULT'

// 라디오를 눌렀을 때 해당 문제의 
const UPDATE_INPUTS = 'result/UPDATE_INPUTS'

const UPDATE_NONSELECTED = 'result/UPDATE_NONSELECTED'

const UPDATE_PAGE = 'result/UPDATE_PAGE'

const BACK_PAGE = 'result/BACK_PAGE'

/*액션 생성함수*/
export const pushResult = () => ({ type: PUSH_RESULT});
export const popResult = () => ({ type: POP_RESULT});
export const updateInputs = (index, page, value) => ({ type: UPDATE_INPUTS, index, page, value})
export const updatenonselected = (page) => ({type: UPDATE_NONSELECTED, page})
export const updatepage = () => ({type: UPDATE_PAGE})
export const backpage = () => ({type: BACK_PAGE})

/*초기 상태*/
const initiolState = {
    result: '',
    first: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    second: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    third: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    fourth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    nonselectedcount: -1,
    pageinputscount: 11,
    page: 1,
}

/*리듀서*/
export default function result(state = initiolState, action){
    switch(action.type){
        case PUSH_RESULT:
            let chr;
            switch(parseInt(state.page)){
                case 1:
                    if(state.first.reduce((stack, tmp) => {return stack+tmp}) > 22) chr = 'P';
                    else chr = 'G';
                    break;
                case 2:
                    if(state.second.reduce((stack, tmp) => {return stack+tmp}) > 22) chr = 'R';
                    else chr = 'E';
                    break;
                case 3:
                    if(state.third.reduce((stack, tmp) => {return stack+tmp}) > 22) chr = 'C';
                    else chr = 'A';
                    break;
                case 4:
                    let sums = state.fourth.reduce((stack, tmp) => {return stack+tmp});
                    if(sums > 35) chr = '5';
                    else if(sums > 29) chr = '4';
                    else if(sums > 23) chr = '3';
                    else if(sums > 17) chr = '2';
                    else chr = '1';
                    
                }
            console.log(chr);
            return{
                ...state,
                result: state.result + chr
            };
        case POP_RESULT:
            return{
                ...state,
                result: result.slice(0, -1)
            };
        case UPDATE_INPUTS:
            switch(action.page){
                case 1:
                    return{
                        ...state,
                        first: [...state.first.slice(0, action.index), parseInt(action.value), ...state.first.slice(action.index+1, 11)]
                    };
                case 2:
                    return{
                        ...state,
                        second: [...state.second.slice(0, action.index), parseInt(action.value), ...state.second.slice(action.index+1, 12)]
                    };
                case 3:
                    return{
                        ...state,
                        third: [...state.third.slice(0, action.index), parseInt(action.value), ...state.third.slice(action.index+1, 12)]
                    };
                case 4:
                    return{
                        ...state,
                        fourth: [...state.fourth.slice(0, action.index), parseInt(action.value), ...state.fourth.slice(action.index+1, 12)]
                    };
            }
        case UPDATE_NONSELECTED:
            console.log(state);
            let count = 0;
            switch(state.page){
                case 1:
                    for(let i=0; i<state.first.length; i++){
                        if(state.first[i] === 0){count = count + 1}
                    }
                    console.log(count);
                    if(-1 < count < 12){
                        return{
                            ...state,
                            nonselectedcount: count,
                            pageinputscount: state.first.length,
                            page: action.page
                        }
                    } else{
                        return{
                            ...state,
                            nonselectedcount: -1,
                            pageinputscount: state.first.length,
                            page:1
                        }
                    }
                case 2:
                    for(let i=0; i<state.second.length; i++){
                        if(state.second[i] === 0){count = count + 1}
                    }
                    if(-1 < count < 12){
                        return{
                            ...state,
                            nonselectedcount: count,
                            pageinputscount: state.second.length,
                            page:action.page
                        }
                    } else{
                        return{
                            ...state,
                            nonselectedcount: -1,
                            pageinputscount: state.second.length,
                            page:2
                        }
                    }
                case 3:
                    for(let i=0; i<state.third.length; i++){
                        if(state.third[i] === 0){count = count + 1}
                    }
                    if(-1 < count < 12){
                        return{
                            ...state,
                            nonselectedcount: count,
                            pageinputscount: state.third.length,
                            page:action.page
                        }
                    } else{
                        return{
                            ...state,
                            nonselectedcount: -1,
                            pageinputscount: state.third.length,
                            page:3
                        }
                    }
                case 4:
                    for(let i=0; i<state.fourth.length; i++){
                        if(state.fourth[i] === 0){count = count + 1}
                    }
                    if(-1 < count < 12){
                        return{
                            ...state,
                            nonselectedcount: count,
                            pageinputscount: state.fourth.length,
                            page:action.page
                        }
                    } else{
                        return{
                            ...state,
                            nonselectedcount: -1,
                            pageinputscount: state.fourth.length,
                            page:4
                        }
                    }
            }
        case UPDATE_PAGE:
            switch(state.page){
                case 1:
                    return{
                        ...state,
                        page:2,
                        nonselectedcount: -1,
                        pageinputscount: state.second.length
                    }
                case 2:
                    return{
                        ...state,
                        page:3,
                        nonselectedcount: -1,
                        pageinputscount: state.third.length
                    }
                case 3:
                    return{
                        ...state,
                        page:4,
                        nonselectedcount: -1,
                        pageinputscount: state.fourth.length
                    }
                }
        case BACK_PAGE:
            switch(state.page){
                case 2:
                    return{
                        ...state,
                        page:1
                    }
                case 3:
                    return{
                        ...state,
                        page:2
                    }
                case 4:
                    return{
                        ...state,
                        page:3
                    }
            }
        default:
            return state;
    }
}