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
      };var element = document.getElementById("a2b7de51-2f06-4778-bf0b-777b196e773e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a2b7de51-2f06-4778-bf0b-777b196e773e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css", "https://cdn.pydata.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function(root, factory) {
          //  if(typeof exports === 'object' && typeof module === 'object')
          //    factory(require("Bokeh"));
          //  else if(typeof define === 'function' && define.amd)
          //    define(["Bokeh"], factory);
          //  else if(typeof exports === 'object')
          //    factory(require("Bokeh"));
          //  else
              factory(root["Bokeh"]);
          })(this, function(Bokeh) {
            var define;
            return (function outer(modules, entry) {
            if (Bokeh != null) {
              return Bokeh.register_plugin(modules, {}, entry);
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })
          ({
            "custom/main": function(require, module, exports) {
              var models = {
                "LatexLabel": require("custom/bk_script_22223.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_22223.latex_label": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = function (d, b) {
                  extendStatics = Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                  return extendStatics(d, b);
              };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var label_1 = require("models/annotations/label");
          var LatexLabelView = /** @class */ (function (_super) {
              __extends(LatexLabelView, _super);
              function LatexLabelView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              LatexLabelView.prototype.render = function () {
                  //--- Start of copied section from ``Label.render`` implementation
                  // Here because AngleSpec does units tranform and label doesn't support specs
                  var angle;
                  switch (this.model.angle_units) {
                      case "rad": {
                          angle = -this.model.angle;
                          break;
                      }
                      case "deg": {
                          angle = (-this.model.angle * Math.PI) / 180.0;
                          break;
                      }
                      default:
                          throw new Error("unreachable code");
                  }
                  var panel = this.panel != null ? this.panel : this.plot_view.frame;
                  var xscale = this.plot_view.frame.xscales[this.model.x_range_name];
                  var yscale = this.plot_view.frame.yscales[this.model.y_range_name];
                  var sx = this.model.x_units == "data" ? xscale.compute(this.model.x) : panel.xview.compute(this.model.x);
                  var sy = this.model.y_units == "data" ? yscale.compute(this.model.y) : panel.yview.compute(this.model.y);
                  sx += this.model.x_offset;
                  sy -= this.model.y_offset;
                  //--- End of copied section from ``Label.render`` implementation
                  // Must render as superpositioned div (not on canvas) so that KaTex
                  // css can properly style the text
                  this._css_text(this.plot_view.canvas_view.ctx, "", sx, sy, angle);
                  // ``katex`` is loaded into the global window at runtime
                  // katex.renderToString returns a html ``span`` element
                  katex.render(this.model.text, this.el, { displayMode: true });
              };
              return LatexLabelView;
          }(label_1.LabelView));
          exports.LatexLabelView = LatexLabelView;
          var LatexLabel = /** @class */ (function (_super) {
              __extends(LatexLabel, _super);
              function LatexLabel(attrs) {
                  return _super.call(this, attrs) || this;
              }
              LatexLabel.initClass = function () {
                  this.prototype.type = 'LatexLabel';
                  this.prototype.default_view = LatexLabelView;
              };
              return LatexLabel;
          }(label_1.Label));
          exports.LatexLabel = LatexLabel;
          LatexLabel.initClass();
    
          }
          }, "custom/main");
          ;
          });
    
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"9e3c2d7e-22e1-42c5-89d3-d392c6a1e24e":{"roots":{"references":[{"attributes":{"below":[{"id":"22235","type":"LinearAxis"}],"center":[{"id":"22239","type":"Grid"},{"id":"22244","type":"Grid"},{"id":"22263","type":"LatexLabel"}],"left":[{"id":"22240","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"22261","type":"GlyphRenderer"}],"title":{"id":"22225","type":"Title"},"toolbar":{"id":"22251","type":"Toolbar"},"x_range":{"id":"22227","type":"DataRange1d"},"x_scale":{"id":"22231","type":"LinearScale"},"y_range":{"id":"22229","type":"DataRange1d"},"y_scale":{"id":"22233","type":"LinearScale"}},"id":"22224","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22271","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22245","type":"PanTool"},{"id":"22246","type":"WheelZoomTool"},{"id":"22247","type":"BoxZoomTool"},{"id":"22248","type":"SaveTool"},{"id":"22249","type":"ResetTool"},{"id":"22250","type":"HelpTool"}]},"id":"22251","type":"Toolbar"},{"attributes":{"ticker":{"id":"22236","type":"BasicTicker"}},"id":"22239","type":"Grid"},{"attributes":{},"id":"22246","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"22258","type":"ColumnDataSource"},"glyph":{"id":"22259","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22260","type":"Line"},"selection_glyph":null,"view":{"id":"22262","type":"CDSView"}},"id":"22261","type":"GlyphRenderer"},{"attributes":{},"id":"22241","type":"BasicTicker"},{"attributes":{"formatter":{"id":"22265","type":"BasicTickFormatter"},"ticker":{"id":"22236","type":"BasicTicker"}},"id":"22235","type":"LinearAxis"},{"attributes":{},"id":"22269","type":"Selection"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"22259","type":"Line"},{"attributes":{"source":{"id":"22258","type":"ColumnDataSource"}},"id":"22262","type":"CDSView"},{"attributes":{"callback":null},"id":"22227","type":"DataRange1d"},{"attributes":{"background_fill_alpha":{"value":0},"render_mode":"css","text":"f = \\\\sum_{n=1}^\\\\infty\\\\frac{-e^{i\\\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":40,"x_units":"screen","y":420,"y_units":"screen"},"id":"22263","type":"LatexLabel"},{"attributes":{},"id":"22236","type":"BasicTicker"},{"attributes":{"formatter":{"id":"22267","type":"BasicTickFormatter"},"ticker":{"id":"22241","type":"BasicTicker"}},"id":"22240","type":"LinearAxis"},{"attributes":{},"id":"22265","type":"BasicTickFormatter"},{"attributes":{},"id":"22267","type":"BasicTickFormatter"},{"attributes":{},"id":"22250","type":"HelpTool"},{"attributes":{},"id":"22233","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"22241","type":"BasicTicker"}},"id":"22244","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Yn7YNAjD5P1fq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyJ/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDSwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/+KMW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCr95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}},"selected":{"id":"22269","type":"Selection"},"selection_policy":{"id":"22270","type":"UnionRenderers"}},"id":"22258","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"22271","type":"BoxAnnotation"}},"id":"22247","type":"BoxZoomTool"},{"attributes":{},"id":"22231","type":"LinearScale"},{"attributes":{},"id":"22270","type":"UnionRenderers"},{"attributes":{"text":"LaTex Demonstration"},"id":"22225","type":"Title"},{"attributes":{"callback":null},"id":"22229","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"22260","type":"Line"},{"attributes":{},"id":"22248","type":"SaveTool"},{"attributes":{},"id":"22249","type":"ResetTool"},{"attributes":{},"id":"22245","type":"PanTool"}],"root_ids":["22224"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"9e3c2d7e-22e1-42c5-89d3-d392c6a1e24e","roots":{"22224":"a2b7de51-2f06-4778-bf0b-777b196e773e"}}];
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