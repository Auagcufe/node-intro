var uuu = {
    Area: function(x,y,z){
        total = 2*(x*y+y*z+x*z)
        return total
    },

    Volumn: function(x,y,z){
        acd = x*y*z
        return acd
    },

    Check: function(x,y,z){
        if(x===y && y===z){
            console.log('It is a cube!')
        }else{
            console.log('It is not cool!')
        }
    },

    sphereVol: function(r){
        ef = 4/3*3.14*r*r
        return ef
    },

    coneVol: function(r){
        gh = 4/9*3.14*r*r
        return gh
    }
}

module.exports = uuu