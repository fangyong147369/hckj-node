'use strict';

/**
 * 授权登陆
 * @param req
 * @param res
 * @param next
 */
exports.auth= function*(next) {
    console.log("this.session.user:"+this.session.user)
    if(this.session.user){
        yield* next;
    }else{
        this.redirect('/signInPC');
    }
};
