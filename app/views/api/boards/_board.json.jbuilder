json.extract! board, :id, :title, :background_color, :list_order
json.listIds board.lists.pluck(:id)
