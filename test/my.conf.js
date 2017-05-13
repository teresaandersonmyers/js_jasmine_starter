module.exports = function(config) { 
	config.set({ 
		basePath: '', 
		frameworks: ['jasmine'], 
		files: [ '../src/*.js', 'spec/*.js' ], 
		browsers: ['Chrome'], 
		singleRun: true, 
		preprocessors: { '../src/*.js': ['coverage'] }, 
		reporters: ['progress', 'coverage'] 
	}); 
};

