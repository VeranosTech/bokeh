(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("72513390-8fb5-43f2-9ded-3efe5490b5d4");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '72513390-8fb5-43f2-9ded-3efe5490b5d4' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
      var css_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"2b9dc4b5-be78-429d-81b4-7612f84a2be0":{"roots":{"references":[{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"3978","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"3985","type":"HoverTool"},{"attributes":{"text":"Hexbin for 500 points"},"id":"3947","type":"Title"},{"attributes":{"callback":null},"id":"3951","type":"DataRange1d"},{"attributes":{},"id":"3993","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"3994","type":"Selection"},"selection_policy":{"id":"3995","type":"UnionRenderers"}},"id":"3980","type":"ColumnDataSource"},{"attributes":{},"id":"3963","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"3972","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3975","type":"HexTile"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3967","type":"WheelZoomTool"},{"id":"3968","type":"ResetTool"},{"id":"3985","type":"HoverTool"}]},"id":"3969","type":"Toolbar"},{"attributes":{"ticker":{"id":"3958","type":"BasicTicker"},"visible":false},"id":"3961","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3976","type":"HexTile"},{"attributes":{},"id":"3967","type":"WheelZoomTool"},{"attributes":{},"id":"3958","type":"BasicTicker"},{"attributes":{},"id":"3968","type":"ResetTool"},{"attributes":{"formatter":{"id":"3988","type":"BasicTickFormatter"},"ticker":{"id":"3958","type":"BasicTicker"}},"id":"3957","type":"LinearAxis"},{"attributes":{"formatter":{"id":"3990","type":"BasicTickFormatter"},"ticker":{"id":"3963","type":"BasicTicker"}},"id":"3962","type":"LinearAxis"},{"attributes":{},"id":"3995","type":"UnionRenderers"},{"attributes":{},"id":"3994","type":"Selection"},{"attributes":{"callback":null},"id":"3949","type":"DataRange1d"},{"attributes":{"data_source":{"id":"3973","type":"ColumnDataSource"},"glyph":{"id":"3975","type":"HexTile"},"hover_glyph":{"id":"3977","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"3976","type":"HexTile"},"selection_glyph":null,"view":{"id":"3979","type":"CDSView"}},"id":"3978","type":"GlyphRenderer"},{"attributes":{},"id":"3988","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"3957","type":"LinearAxis"}],"center":[{"id":"3961","type":"Grid"},{"id":"3966","type":"Grid"}],"left":[{"id":"3962","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"3978","type":"GlyphRenderer"},{"id":"3983","type":"GlyphRenderer"}],"title":{"id":"3947","type":"Title"},"toolbar":{"id":"3969","type":"Toolbar"},"x_range":{"id":"3949","type":"DataRange1d"},"x_scale":{"id":"3953","type":"LinearScale"},"y_range":{"id":"3951","type":"DataRange1d"},"y_scale":{"id":"3955","type":"LinearScale"}},"id":"3946","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3992","type":"Selection"},{"attributes":{},"id":"3953","type":"LinearScale"},{"attributes":{"source":{"id":"3973","type":"ColumnDataSource"}},"id":"3979","type":"CDSView"},{"attributes":{"source":{"id":"3980","type":"ColumnDataSource"}},"id":"3984","type":"CDSView"},{"attributes":{"high":15,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"3972","type":"LinearColorMapper"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3982","type":"Circle"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3981","type":"Circle"},{"attributes":{"data_source":{"id":"3980","type":"ColumnDataSource"},"glyph":{"id":"3981","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3982","type":"Circle"},"selection_glyph":null,"view":{"id":"3984","type":"CDSView"}},"id":"3983","type":"GlyphRenderer"},{"attributes":{},"id":"3955","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"3963","type":"BasicTicker"},"visible":false},"id":"3966","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"3977","type":"HexTile"},{"attributes":{},"id":"3990","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"c":[1,1,1,1,1,1,1,3,2,1,1,1,3,2,2,2,1,3,2,3,1,2,5,4,3,5,3,1,2,2,2,7,4,8,4,9,5,2,2,5,7,5,13,8,8,7,3,1,1,3,10,7,15,11,14,5,6,4,1,1,2,1,6,8,12,14,11,5,13,3,2,1,4,4,11,15,10,10,4,7,2,1,3,3,6,7,5,7,3,2,1,1,2,3,6,3,6,9,6,4,1,1,5,3,3,5,2,2,1,1,2,1,1,3,2,2,1,1,1],"q":[-4,-3,-3,-3,-3,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,10,10,10,11,11,13],"r":[0,-5,1,3,4,-3,-1,0,1,3,-6,-3,-2,-1,0,1,2,3,-6,-5,-4,-3,-2,-1,0,1,2,4,5,-8,-6,-4,-3,-2,-1,0,1,2,-6,-5,-4,-3,-2,-1,0,1,2,3,-9,-7,-5,-4,-3,-2,-1,0,1,2,3,4,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-9,-8,-7,-6,-5,-4,-3,-2,0,1,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,-9,-7,-6,-5,-4,-3,-2,-1,-7,-6,-3,-2,-8,-6,-4,-6,-4,-7]},"selected":{"id":"3992","type":"Selection"},"selection_policy":{"id":"3993","type":"UnionRenderers"}},"id":"3973","type":"ColumnDataSource"}],"root_ids":["3946"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"2b9dc4b5-be78-429d-81b4-7612f84a2be0","roots":{"3946":"72513390-8fb5-43f2-9ded-3efe5490b5d4"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();